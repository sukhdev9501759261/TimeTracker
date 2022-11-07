import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { typography, fontNames } from '../styles/typography';

const CounterComp = ({ number = 0 }) => {
    return (
        <View>
            <Text style={styles.txt} >{number}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    txt: {
        fontSize: typography.FONT_SIZE_28,
        fontFamily: fontNames.boldFont,
        textAlign: 'center'
    }
})


export default React.memo(CounterComp)