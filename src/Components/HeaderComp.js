//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import imagePath from '../constants/imagePath';


const HeaderComp = ({
    onPressBack,
    headStyle = {},
    imageStyle = {},
}) => {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={!!onPressBack ? onPressBack : () => goBack()}
            >
                <Image style={{ ...styles.headStyle, ...headStyle, ...imageStyle }} source={imagePath.icBakc} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: moderateScale(42)
    },
});

//make this component available to the app
export default HeaderComp;
