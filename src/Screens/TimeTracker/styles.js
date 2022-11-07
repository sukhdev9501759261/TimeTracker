import { StyleSheet } from "react-native";
import { fontNames, typography } from "../../styles/typography";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        padding: 8,

    },
    mostUseFull: {
        fontSize: typography.FONT_SIZE_22,
        fontFamily: fontNames.boldFont,
        color: colors.BLACK,
    },
    AddMargin20: {
        marginTop: 20,
    },
    trackedTime: {
        fontSize: typography.FONT_SIZE_16,
        fontFamily: fontNames.semiBold,
        color: colors.BLACK,
    },
    hoursMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    hoursViewToday: {
        backgroundColor: '#F7FFE2',
        padding: 40,
        width: 200,
        borderRadius: 15,
    },
    hoursViewWeek: {
        backgroundColor: '#EFFCFF',
        padding: 40,
        width: 200,
        borderRadius: 15,
    },
    hoursTextToday: {
        fontSize: typography.FONT_SIZE_18,
        fontFamily: fontNames.boldFont,
        color: colors.BLACK,
    },
    hoursTextWeek: {
        fontSize: typography.FONT_SIZE_16,
        fontFamily: fontNames.boldFont,
        color: colors.BLACK
    },
    todaytext: {
        fontSize: typography.FONT_SIZE_12,
        fontFamily: fontNames.semiBold,
        color: 'grey',
    },
    moreData: {
        fontSize: typography.FONT_SIZE_22,
        fontFamily: fontNames.boldFont,
        color: colors.BLACK,
    },
    center: {
        alignItems: 'center',
    },
    pressThisButton: {
        fontSize: typography.FONT_SIZE_12,
        fontFamily: fontNames.semiBold,
        color: 'grey',
        marginTop: 10,
    },
    bottomViewInnerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    bottomViewOuterView: {
        backgroundColor: '#E5E4E2',
        borderRadius: 15,
        marginTop: 20,
        padding: 16,
    },
    doItBtn: {
        backgroundColor: '#D6F781',
        width: 80,
        padding: 10,
        borderRadius: 15,
    },
    btnView: {
        alignItems: 'flex-end',
    },
    btnText: {
        fontSize: typography.FONT_SIZE_16,
        fontFamily: fontNames.boldFont,
        color: 'black',
    },
    totaltimeTrackView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    imgTimer: {
        height: 40,
        width: 40,
    },
    imgSmile: {
        height: 35,
        width: 35,
        position: 'absolute',
        top: 28,
        left: 37,
    }
})

export default styles;