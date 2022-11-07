import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import colors from '../styles/colors';
import { fontNames, typography } from '../styles/typography';


export default function TextInputComp({
    placeholder = "",
    inputStyle = {},
    onChangeText = () => { },
    ...props

}) {
    return (
        <>

            <TextInput
                style={{ ...styles.inputStyle, ...inputStyle }}
                {...props}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </>

    )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: moderateScale(12),
        fontFamily: fontNames.regularFont,
        fontSize: typography.FONT_SIZE_16,
        height: moderateScale(40),

    }
})