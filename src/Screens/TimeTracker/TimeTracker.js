import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import React from 'react';
import styles from './styles';
import strings from '../../constants/lang';
import moment from 'moment';
import {
    LineChart,
} from "react-native-chart-kit";
import imagePath from '../../constants/imagePath';
let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] // labels for graph

export default function TimeTracker({ navigation }) {
    const [graphArray, setgraphArray] = React.useState([0, 0, 0, 0, 0, 0]);
    const [todayHours, settodayHours] = React.useState(0);
    const [monthHours, settodayMonthHours] = React.useState(0);

    const createBlock = async () => {
        let timeStarts = moment().subtract(6, 'months') // get date from last six month from current date
        let makeBlocks = [];
        // we take 1000 static value for creating blocks
        for (let i = 0; i < 1000; i++) {
            let timeStart = moment(timeStarts, "DD-MM-YYYY").add(i + 1, 'days'); // add on one day in start date upto 6 months
            let assumetimeForworkingDayIsHours = Math.floor(Math.random() * (10 - 8 + 1) + 8); // This will give random value between 8 and 10 we assume user working hours in this range(we can make dynamic as according to tyracker)
            let timeEnd = moment(timeStart).add(assumetimeForworkingDayIsHours, 'hours'); // add working day time in start tracking time to calculate endTime (this will be get time when tracker stop)
            let duration = moment.duration(timeEnd.diff(timeStart)); //  return total time of particular day
            let hours = duration.asHours();
            let breakTime = 1 // break time set to 1 hours you can adjust according to requirement
            let finalTime = hours - breakTime; // final time of day
            let block =
            {
                id: i,
                startDate: timeStart,
                endDate: timeEnd,
                breakLength: breakTime,
                createdAt: timeStart,
                totalTime: finalTime

            }
            makeBlocks.push(block);
        }
        let generateFinalReport = [];
        let addTotalHour = 0;
        let weeklyHours = 0;
        // get only six month blocks to generate report
        for (let b = 0; b < makeBlocks.length; b++) {
            addTotalHour = addTotalHour + makeBlocks[b].totalTime;
            // get week time of last block
            if (b + 1 > 993) {
                weeklyHours = weeklyHours + makeBlocks[b].totalTime;
                settodayMonthHours(weeklyHours);
            }
            // we take 30 static for one month and in this way 180 for six months
            if ((b + 1) % 30 == 0 && ((b + 1) <= 180)) {
                generateFinalReport.push(addTotalHour);
                addTotalHour = 0;
            }
        }
        console.log("six months report with total monthly hours =>", generateFinalReport)
        settodayHours(makeBlocks[makeBlocks.length - 1].totalTime);
        setgraphArray(generateFinalReport);
    }

    return (
        <View style={styles.container}>
            <View style={styles.AddMargin20}>
                <View>
                    <Text style={styles.mostUseFull}>{strings.MOST_USEFUL_APP_EVER}</Text>
                </View>
                <View style={styles.totaltimeTrackView}>
                    <View>
                        <Image style={styles.imgTimer} resizeMode="contain" source={imagePath.timer} />
                    </View>
                    <View>
                        <Text style={styles.trackedTime}> {strings.TOTAL_TRACKED_TIME}</Text>
                    </View>
                </View>
                <View>
                    <LineChart
                        data={{
                            labels: labels,
                            datasets: [
                                {
                                    data: graphArray
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        // yAxisLabel="$"
                        // put h on back side of hours values
                        yAxisSuffix="h"
                        withDots={true}
                        withInnerLines={false}
                        withOuterLines={false}
                        withShadow={false}
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "red",
                            backgroundGradientFrom: "#ffffff",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `black`,
                            labelColor: (opacity = 1) => `black`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                // r = increase dot size
                                r: "6",
                                strokeWidth: "2",
                                stroke: "black"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </View>
                <View style={styles.hoursMainView}>
                    <View style={styles.hoursViewToday}>
                        <Text style={styles.hoursTextToday}>
                            {todayHours}h
                        </Text>
                        <Text style={styles.todaytext}>
                            {strings.TODAY}
                        </Text>
                    </View>
                    <View style={styles.hoursViewWeek}>
                        <Text style={styles.hoursTextToday}>
                            {monthHours}h
                        </Text>
                        <Text style={styles.todaytext}>
                            {strings.THIS_WEEK}
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomViewOuterView}>
                    <View style={styles.center}>
                        <Text style={styles.moreData}>{strings.WANT_MORE_DATA}</Text>
                    </View>
                    <View style={styles.bottomViewInnerView}>
                        <View style={styles.center}>
                            <Image style={styles.img} resizeMode="contain" source={imagePath.heart_icon} />
                            <Image style={styles.imgSmile} resizeMode="contain" source={imagePath.smile} />
                        </View>
                        <View style={styles.center}>
                            <Text style={styles.pressThisButton}>{strings.PRESS_THIS_BUTTON_TO_ADD_1000_BLOCKS}</Text>
                        </View>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity onPress={() => { createBlock() }} style={styles.doItBtn}>
                            <Text style={styles.btnText}>
                                {strings.DO_IT}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
