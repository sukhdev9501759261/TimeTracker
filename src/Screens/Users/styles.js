import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import { fontNames, typography } from '../../styles/typography';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },

    commStyle: {
        fontSize: typography.FONT_SIZE_18,
        fontFamily: fontNames.regularFont,
    },

    headingStyle: {
        fontSize: typography.FONT_SIZE_22,
        fontFamily: fontNames.boldFont,
    },

    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
    },

    newGroupTxt: {
        fontSize: typography.FONT_SIZE_22,
        fontFamily: fontNames.regularFont,
        color: colors.blue,
        marginLeft: moderateScale(16),
    },

    userName: {
        fontSize: typography.FONT_SIZE_16,
        fontFamily: fontNames.boldFont,
        marginLeft: moderateScale(16),
        textTransform: "capitalize",
    }
})

export default styles;