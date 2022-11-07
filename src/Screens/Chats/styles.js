import { StyleSheet } from 'react-native';
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
    }
})

export default styles;