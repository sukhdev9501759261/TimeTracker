import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import colors from '../styles/colors';
import strings from '../constants/lang';
import { fontNames, typography } from '../styles/typography';

export default function RoundImg({
    image = '',
    size = 80,
    onPress = () => { },
    isStatic = false,
    imageStyle
}) {

    let compImg = isStatic ? image : { uri: image }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={{
                height: moderateScale(size),
                width: moderateScale(size),
                borderRadius: moderateScale(size / 2),
                backgroundColor: colors.white,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: "center",
                borderColor: "gray",
                ...imageStyle

            }}>
            {!!image ? <Image style={{
                height: moderateScale(size),
                width: moderateScale(size),
                borderRadius: moderateScale(size / 2),
            }}
                source={compImg} /> : <Text style={styles.textStyle}>{strings.ADD_PHOTO}</Text>}

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: typography.FONT_SIZE_12,
        fontFamily: fontNames.boldFont,
        color: colors.blue,
    }
})