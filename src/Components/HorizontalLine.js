import { View, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../styles/colors';

export default function HorizontalLine({
    lineStyle = {},
}) {
    return (
        <View style={{ ...styles.lineStyle, ...lineStyle }} />

    )
}
const styles = StyleSheet.create({
    lineStyle: {
        borderBottomWidth: 0.6,
        borderBottomColor: colors.TEXTGRAYTHEME,
        height: 1,
    }
})