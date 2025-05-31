import { Dimensions, StatusBar } from 'react-native';
import u from '../utils/unit';

const statusBarHeight = StatusBar.currentHeight || 0;

console.log('Height', statusBarHeight);

export const SCREEN_WIDTH: number = Dimensions.get('screen').width;
export const SCREEN_HEIGHT: number =
  Dimensions.get('screen').height - statusBarHeight;

interface Colors {
  [key: string]: string;
}

interface Fonts {
  [key: string]: string;
}

interface TextStyles {
  [key: string]: string;
}

interface Space {
  [key: string]: number;
}

interface Spacing {
  [key: string]: string;
}

interface FontSize {
  [key: string]: number;
}

interface ThemeType {
  colors: Colors;
  fonts: Fonts;
  textStyles: TextStyles;
  space: Space;
  spacing: Spacing;
  fontsize: FontSize;
}

const Theme: ThemeType = {
  colors: {
    backGround: '#0088cc',
    activeTabBackground:'#0088cc',
    inactiveTabBackground:'#2c3d50',
    purpleLight: '#F7F2F9',
    texttheme:'#009ffd',
    backmarque:'#ffffff1f',
    bgback:'#0088ccd6',
    white: '#FFFFFF',
    black: '#000000',
    minmax:'#097c93',
    balcksecond:'#00000000',
    darkBlue: '#375DFB',
    blue: '#1D61E7',
    blueLight: '#1569C7',
    darkestGray: '#6C7278',
    darkGray: '#ACB5BB',
    grayLight: '#F6F9FF',
    grayLighter: '#F3F3F3',
    grayLightest: '#F9FAFB',
    grayExtraLightest: '#eff2f580',
    green: '#53B45B',
    greenGray: '#417C81',
    orangeLight: '#FFA63F1A',
    lightVoilet: '#51459E1A',
    red: '#EC453B',
    redLight: '#FF7F5C1A',
    navyBlue: '#0A1423',
    gray: '#EDF1F3',
    parrotGreen: '#1CCC98',
    purple: '#908FEC',
    pink: '#F61C7A',
    back: '#72bcee',
    lay: '#f995b9',
    amountButton: '#6DA581',
    gold: '#d4742b',
    gold1: '#FFE47A',
    orange: '#FEA816',
    skyBlue: '#EBF2FF',
    skyBlueDark: '#CBDDFF',
    layBackground: '#FFC3CD80',
    backBackground: '#4BADF180',
    grayExtraDark: '#8199A5',
    blink: '#ffff00',
  },
  fonts: {
    PopinsLight: 'Poppins-Light', //300
    PopinsRegular: 'Poppins-Regular', //400
    PopinsMedium: 'Poppins-Medium', //500
    PopinsSemiBold: 'Poppins-SemiBold', //600
    PopinsBold: 'Poppins-Bold', //700
    PopinsExtraBold: 'Poppins-ExtraBold', //800
    PopinsBlack: 'Poppins-Black', //900
  },
  fontsize: {
    exSmall: u(12),
    small: u(14),
    medium: u(16),
    large: u(18),
    exLarge: u(20),
    exxLarge: u(22),
    vLarge: u(24),
    vxLarge: u(26),
    xxLarge: u(30),
    xxxLarge: u(36),
  },
  textStyles: {
    body8Regular: `
      font-family: "Poppins-Regular";
      font-weight: normal;
      font-size: 8;
      line-height: ${u(12, true)};
    `,
    body9Regular: `
      font-family: "Poppins-Regular";
      font-size: 9;
    `,
    body9Bold: `
      font-family: "Poppins-Bold";
      font-size: 9;
      letter-spacing: 1;
    `,
    body10Regular: `
      font-family: "Poppins-Regular";
      font-size: 10;
    `,
    body10Medium: `
      font-family: "Poppins-Medium";
      font-size: 10;
    `,
    body10Bold: `
      font-family: "Poppins-Bold";
      font-size: 10;
    `,
    body11Regular: `
      font-family: "Poppins-Regular";
      font-size: 11;
    `,
    body11Medium: `
      font-family: "Poppins-Medium";
      font-size: 11;
    `,
    body11Bold: `
      font-family: "Poppins-Bold";
      font-size: 11;
    `,
    body12Regular: `
      font-family: "Poppins-Regular";
      font-size: 12;
    `,
    body12Medium: `
      font-family: "Poppins-Medium";
      font-size: 12;
    `,
    body12SemiBold: `
      font-family: "Poppins-Bold";
      font-size: 12;
    `,
    body12Bold: `
      font-family: "Poppins-Bold";
      font-size: 12;
    `,
    body13Regular: `
      font-family: "Poppins-Regular";
      font-size: 13;
    `,
    body13Medium: `
    font-family: "Poppins-Medium";
    font-size: 13;
  `,
    body13Bold: `
      font-family: "Poppins-Bold";
      font-weight: bold;
      font-size: 13;
    `,
    body14Regular: `
      font-family: "Poppins-Regular";
      font-size: 14;
    `,
    body14Bold: `
      font-family: "Poppins-Bold";
      font-size: 14;
    `,
    body14Medium: `
      font-family: "Poppins-Medium";
      font-size: 14;
    `,
    body15Regular: `
      font-family: "Poppins-Regular";
      font-size: 15;
    `,
    body15Medium: `
      font-family: "Poppins-Medium";
      font-size: 15;
    `,
    body15Bold: `
      font-family: "Poppins-Bold";
      font-size: 15;
    `,
    body16Regular: `
      font-family: "Poppins-Regular";
      font-size: 16;
    `,
    body16Medium: `
      font-family: "Poppins-Medium";
      font-size: 16;
    `,
    body16Bold: `
      font-family: "Poppins-Bold";
      font-size: 16;
    `,
    body18Medium: `
    font-family: "Poppins-Medium";
    font-size: 18;
  `,
    body18Bold: `
    font-family: "Poppins-Bold";
    font-size: 18;
  `,
    body20Regular: `
      font-family: "Poppins-Regular";
      font-size: 20;
    `,
    body20Medium: `
      font-family: "Poppins-Medium";
      font-size: 20;
    `,
    body20Bold: `
      font-family: "Poppins-Bold";
      font-size: 20;
    `,
    body24Regular: `
      font-family: "Poppins-Regular";
      font-size: 24;
    `,
    body24Medium: `
      font-family: "Poppins-Medium";
      font-size: 24;
    `,
    body24Bold: `
      font-family: "Poppins-Bold";
      font-size: 24;
    `,
    body28Bold: `
      font-family: "Poppins-Bold";
      font-size: 28;
    `,
    bodyfontsnew: ` 
    font-family: "Roboto Condensed";
    font-size: 14px;
    
     `

  },
  space: {
    xxxsmall: u(5),
    xxsmall: u(10),
    xsmall: u(15),
    small: u(20),
    medium: u(25),
    lmedium: u(30),
    large: u(35),
    xlarge: u(50),
    xxlarge: u(75),
    xxxlarge: u(100),
  },
  spacing: {
    padXXXSmall: `
      padding-top: ${u(5)};
      padding-bottom: ${u(5)};
      padding-left: ${u(5)};
      padding-right: ${u(5)};
    `,
    padXXXSmallTop: `
      padding-top: ${u(5)}px;
    `,
    padXXXSmallBottom: `
      padding-bottom: ${u(5)}px;
    `,
    padXXXSmallEnds: `
      padding-top: ${u(5)}px;
      padding-bottom: ${u(5)}px;
    `,
    padXXXSmallSides: `
      padding-left: ${u(5)}px;
      padding-right: ${u(5)}px;
    `,
    padXXXSmallRight: `
      padding-right: ${u(5)}px;
    `,
    padXXXSmallLeft: `
      padding-left: ${u(5)}px;
    `,
    marginXXXRight: `
      margin-right: ${u(5)};
    `,
    marginXXXSmall: `
      margin-top: ${u(5)};
      margin-bottom: ${u(5)};
      margin-left: ${u(5)};
      margin-right: ${u(5)};
    `,
    marginXXXSmallTop: `
      margin-top: ${u(5)}px;
    `,
    marginXXXSmallBottom: `
      margin-bottom: ${u(5)}px;
    `,
    marginXXXSmallLeft: `
      margin-left: ${u(5)}px;
    `,
    marginXXXSmallRight: `
      margin-right: ${u(5)}px;
    `,
    marginXXXSmallSides: `
      margin-left: ${u(5)}px;
      margin-right: ${u(5)}px;
    `,
    marginXXXSmallEnds: `
      margin-top: ${u(5)}px;
      margin-bottom: ${u(5)}px;
    `,
    padXXSmall: `
      padding-top: ${u(10)}px;
      padding-bottom: ${u(10)}px;
      padding-left: ${u(10)}px;
      padding-right: ${u(10)}px;
    `,
    padXXSmallTop: `
      padding-top: ${u(10)}px;
    `,
    padXXSmallBottom: `
      padding-bottom: ${u(10)}px;
    `,
    padXXSmallEnds: `
      padding-top: ${u(10)}px;
      padding-bottom: ${u(10)}px;
    `,
    padXXSmallSides: `
      padding-left: ${u(10)}px;
      padding-right: ${u(10)}px;
    `,
    marginXXSmall: `
      margin-top: ${u(10)}px;
      margin-bottom: ${u(10)}px;
      margin-left: ${u(10)}px;
      margin-right: ${u(10)}px;
    `,
    marginXXSmallTop: `
      margin-top: ${u(10)}px;
    `,
    marginXXSmallBottom: `
      margin-bottom: ${u(10)}px;
    `,
    marginXXSmallLeft: `
      margin-left: ${u(10)}px;
    `,
    marginXXSmallRight: `
      margin-right: ${u(10)}px;
    `,
    marginXXSmallEnds: `
      margin-top: ${u(10)}px;
      margin-bottom: ${u(10)}px;
    `,
    marginXXSmallSides: `
      margin-left: ${u(10)}px;
      margin-right: ${u(10)}px;
    `,
    padXSmall: `
      padding-top: ${u(15)}px;
      padding-bottom: ${u(15)}px;
      padding-left: ${u(15)}px;
      padding-right: ${u(15)}px;
    `,
    padXSmallTop: `
      padding-top: ${u(15)}px;
    `,
    padXSmallBottom: `
      padding-bottom: ${u(15)}px;
    `,
    padXSmallEnds: `
      padding-top: ${u(15)}px;
      padding-bottom: ${u(15)}px;
    `,
    padXSmallSides: `
      padding-left: ${u(15)}px;
      padding-right: ${u(15)}px;
    `,
    marginXSmall: `
      margin-top: ${u(15)}px;
      margin-bottom: ${u(15)}px;
      margin-left: ${u(15)}px;
      margin-right: ${u(15)}px;
    `,
    marginXSmallTop: `
      margin-top: ${u(15)}px;
    `,
    marginXSmallBottom: `
      margin-bottom: ${u(15)}px;
    `,
    marginXSmallRight: `
      margin-right: ${u(15)}px;
    `,
    marginXSmallLeft: `
      margin-left: ${u(15)}px;
    `,
    marginXSmallEnds: `
      margin-top: ${u(15)}px;
      margin-bottom: ${u(15)}px;
    `,
    marginXSmallSides: `
      margin-left: ${u(15)}px;
      margin-right: ${u(15)}px;
    `,
    padSmall: `
      padding-top: ${u(20)}px;
      padding-bottom: ${u(20)}px;
      padding-left: ${u(20)}px;
      padding-right: ${u(20)}px;
    `,
    padSmallTop: `
      padding-top: ${u(20)}px;
    `,
    padSmallBottom: `
      padding-bottom: ${u(20)}px;
    `,
    padSmallEnds: `
      padding-top: ${u(20)}px;
      padding-bottom: ${u(20)}px;
    `,
    padSmallSides: `
      padding-left: ${u(20)}px;
      padding-right: ${u(20)}px;
    `,
    marginSmall: `
      margin-top: ${u(20)}px;
      margin-bottom: ${u(20)}px;
      margin-left: ${u(20)}px;
      margin-right: ${u(20)}px;
    `,
    marginSmallTop: `
      margin-top: ${u(20)}px;
    `,
    marginSmallBottom: `
      margin-bottom: ${u(20)}px;
    `,
    marginSmallLeft: `
      margin-left: ${u(20)}px;
    `,
    marginSmallRight: `
      margin-right: ${u(20)}px;
    `,
    marginSmallEnds: `
      margin-top: ${u(20)}px;
      margin-bottom: ${u(20)}px;
    `,
    marginSmallSides: `
      margin-left: ${u(20)}px;
      margin-right: ${u(20)}px;
    `,
    paddMedium: `
      padding-top: ${u(25)}px;
      padding-bottom: ${u(25)}px;
      padding-left: ${u(25)}px;
      padding-right: ${u(25)}px;
    `,
    paddMediumTop: `
      padding-top: ${u(25)}px;
    `,
    paddMediumBottom: `
      padding-bottom: ${u(25)}px;
    `,
    paddMediumEnds: `
      padding-top: ${u(25)}px;
      padding-bottom: ${u(25)}px;
    `,
    paddMediumSides: `
      padding-left: ${u(25)}px;
      padding-right: ${u(25)}px;
    `,
    marginMedium: `
      margin-top: ${u(25)}px;
      margin-bottom: ${u(25)}px;
      margin-left: ${u(25)}px;
      margin-right: ${u(25)}px;
    `,
    marginMediumTop: `
      margin-top: ${u(25)}px;
    `,
    marginMediumBottom: `
      margin-bottom: ${u(25)}px;
    `,
    marginMediumEnds: `
      margin-top: ${u(25)}px;
      margin-bottom: ${u(25)}px;
    `,
    marginMediumSides: `
      margin-left: ${u(25)}px;
      margin-right: ${u(25)}px;
    `,
    padLarge: `
      padding-top:${u(30)}px;
      padding-bottom:${u(30)}px;
      padding-left:${u(30)}px;
      padding-right:${u(30)}px;
    `,
    padLargeTop: `
      padding-top:${u(30)}px;
    `,
    padLargeBottom: `
      padding-bottom:${u(30)}px;
    `,
    padLargeEnds: `
      padding-top:${u(30)}px;
      padding-bottom:${u(30)}px;
    `,
    padLargeSides: `
      padding-left:${u(30)}px;
      padding-right:${u(30)}px;
    `,
    marginLarge: `
      margin-top:${u(30)}px;
      margin-bottom:${u(30)}px;
      margin-left:${u(30)}px;
      margin-right:${u(30)}px;
    `,
    marginLargeTop: `
      margin-top:${u(30)}px;
    `,
    marginLargeBottom: `
      margin-bottom:${u(30)}px;
    `,
    marginLargeLeft: `
      margin-left: ${u(30)}px;
    `,
    marginLargeRight: `
      margin-right: ${u(30)}px;
    `,
    marginLargeEnds: `
      margin-top:${u(30)}px;
      margin-bottom:${u(30)}px;
    `,
    marginLargeSides: `
      margin-left:${u(30)}px;
      margin-right:${u(30)}px;
    `,
    padXLarge: `
      padding-top: ${u(50)}px;
      padding-bottom: ${u(50)}px;
      padding-left: ${u(50)}px;
      padding-right: ${u(50)}px;
    `,
    padXLargeTop: `
      padding-top: ${u(50)}px;
    `,
    padXLargeBottom: `
      padding-bottom: ${u(50)}px;
    `,
    padXLargeEnds: `
      padding-top: ${u(50)}px;
      padding-bottom: ${u(50)}px;
    `,
    padXLargeSides: `
      padding-left: ${u(50)}px;
      padding-right: ${u(50)}px;
    `,
    marginXLarge: `
      margin-top: ${u(50)}px;
      margin-bottom: ${u(50)}px;
      margin-left: ${u(50)}px;
      margin-right: ${u(50)}px;
    `,
    marginXLargeTop: `
      margin-top: ${u(50)}px;
    `,
    marginXLargeBottom: `
      margin-bottom: ${u(50)}px;
    `,
    marginXLargeEnds: `
      margin-top: ${u(50)}px;
      margin-bottom: ${u(50)}px;
    `,
    marginXLargeSides: `
      margin-left: ${u(50)}px;
      margin-right: ${u(50)}px;
    `,
  },
};

export default Theme;
