import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { ScaledSheet, moderateScale } from "react-native-size-matters";
import { fontNames } from './typography';
import { textScale } from './responsiveStyles';

const commStyle = ScaledSheet.create({
    commStyle: {

        justifyContent: 'center',
        // backgroundColor: colors.WHITE,
        borderRadius: spacing.RADIUS_2,
        height: spacing.PADDING_48,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        paddingHorizontal: spacing.PADDING_16
    },
    fontSize16: {
        fontFamily: fontNames.regularFont,
        color: colors.black,
        fontSize: textScale(16)
    },
    fontBold16: {
        fontFamily: fontNames.regularFont,
        color: colors.black,
        fontSize: textScale(16)
    },
    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fullFlex: {
        flex: 1
    }

})

export default commStyle