import { StyleSheet } from "react-native";
import { fontNames, typography } from "../../styles/typography";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: typography.FONT_SIZE_24,
        fontFamily: fontNames.semiBoldItalic,
        color: "red",
    },
})

export default styles;