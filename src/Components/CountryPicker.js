import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useCallback } from 'react';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import Modal from 'react-native-modal';
import HeadComp from './HeadComp';
import countries from './countries';
import HorizontalLine from './HorizontalLine';
import { fontNames, typography } from '../styles/typography';
import { SvgUri } from 'react-native-svg';
import strings from '../constants/lang';


const CountryPicker = ({
    fetchCountry = () => { },
    value = ""
}) => {
    const [data, setData] = useState(countries);
    const [showModal, setShowModal] = useState(false)


    const renderItem = useCallback(({ item, index }) => {
        isSelected = value == item.name
        return (
            <TouchableOpacity activeOpacity={0.7}
                style={{ marginHorizontal: 16, flexDirection: "row" }}
                onPress={() => onSelectCountry(item)}>

                <SvgUri
                    width="30"
                    height="30"
                    uri={item?.flag}
                />

                <Text style={{
                    ...styles.nameStyle,
                    color: isSelected ? colors.blue : colors.BLACK,
                    fontFamily: isSelected ? fontNames.boldFont : fontNames.regularFont
                }}>  {item?.name}({item?.dialCode})</Text>
            </TouchableOpacity>
        )
    }, [data, value])

    const onSelectCountry = (item) => {
        fetchCountry(item)
        setShowModal(false)
    }
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.container}
                onPress={() => setShowModal(true)}>
                <Text style={styles.value}>{value}</Text>
                <Image source={imagePath.icArrow} />
            </TouchableOpacity>
            <Modal
                style={{ backgroundColor: 'white', margin: 0 }}
                isVisible={showModal}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 0.07 }}>
                        <HeadComp
                            centerText={strings.SELECT_YOUR_COUNTRY}
                            onPressRight={() => setShowModal(false)} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            ItemSeparatorComponent={() => <HorizontalLine lineStyle={{ marginVertical: 12 }} />} />
                    </View>
                </SafeAreaView>

            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        borderBottomWidth: 0.8,
        borderBottomColor: colors.TEXTGRAYTHEME,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    value: {
        color: colors.blue,
        fontSize: typography.FONT_SIZE_18,
        fontFamily: fontNames.boldFont,
    },
    nameStyle: {
        color: colors.blue,
        fontSize: typography.FONT_SIZE_18,
        fontFamily: fontNames.regularFont,
    },
})

export default React.memo(CountryPicker);