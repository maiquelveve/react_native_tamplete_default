import { DefaultTheme } from 'react-native-paper';
import {
    ACCENT,
    BACKGROUND,
    PRIMARY,
    WHITE,
    BLACK,
    INACTIVETINT,
    DRAWERBACKGROUND,
    DRAWERINACTIVEBACKGROUND,
} from './colorsTheme';



const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: PRIMARY,
        accent: ACCENT,
        background: BACKGROUND,
        white: WHITE,
        black: BLACK,
        inactiveTint: INACTIVETINT,
        drawerBackground: DRAWERBACKGROUND,
        drawerInactiveBackground: DRAWERINACTIVEBACKGROUND,
    },
};

export default theme;