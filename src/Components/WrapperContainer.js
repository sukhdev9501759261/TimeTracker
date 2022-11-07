import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../styles/colors';
export default function WrapperContainer({
    statusBarColor = colors.white,
    children,
    containerStyle = {},
    barStyle = 'dark-content'

}) {
    return (
        <View style={{ ...styles.container, ...containerStyle }}>
            <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
            <SafeAreaView style={{flex:1}}>
                {children}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 26,
    }
})