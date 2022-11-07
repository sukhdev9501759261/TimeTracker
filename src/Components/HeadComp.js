import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import strings from '../constants/lang';
import colors from '../styles/colors';
import { fontNames } from '../styles/typography';


export default function HeadComp({
    centerText = "",
    rightText = strings.DONE,
    leftCustomView = () => { },
    isLeftView = false,
    containerStyle = {},
    rightTextStyle = {},
    onPressRight = () => { },
    isRight = true,
    rightPressActive = true,
    rightImg = ''

}) {
    return (
        <View style={{
            ...styles.container,
            ...containerStyle,
        }}>
            {isLeftView ? leftCustomView() : <View />}
            <Text style={styles.centerTextStyle}>{centerText}</Text>
            {isRight ? <TouchableOpacity disabled={rightPressActive} onPress={onPressRight}>
                {rightImg ? <Image source={rightImg} /> : <Text style={{ ...styles.rightTextStyle, ...rightTextStyle }}>{rightText}</Text>}
            </TouchableOpacity> : <View />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderColor: 'grey',
        paddingBottom: 12,
        paddingHorizontal: 12
    },
    centerTextStyle: {
        color: colors.black,
        fontFamily: fontNames.bold,
        fontSize: 24
    },
    rightTextStyle: {
        color: colors.BLACK_OPACITY_66,
        fontFamily: fontNames.regular,
        fontSize: 18
    }

})