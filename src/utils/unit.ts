import { Dimensions, PixelRatio } from 'react-native';

// viewportMultiplier globally increases text and layout sizes
// according to the width of the device
const windowWidth = Dimensions.get('window').width;
const defaultWidth = 375;
const viewportMultiplier = windowWidth / defaultWidth;

// textMultiplier resizes text according to our definitions
// and the chosen fontScale
const fontScale = PixelRatio.getFontScale();
const fontScaleTarget = 1.6;
let textMultiplier =
  fontScale >= 1.25 ? fontScaleTarget / fontScale : fontScale;

// 05
if (fontScale >= 1.1) {
  textMultiplier = 1.2;
}
// 06
if (fontScale >= 1.2) {
  textMultiplier = 1;
}
// 07
if (fontScale >= 1.35) {
  textMultiplier = 0.925;
}
// 08
if (fontScale >= 1.7) {
  textMultiplier = 0.75;
}
// 09
if (fontScale >= 2) {
  textMultiplier = 0.6;
}
// 10
if (fontScale >= 2.5) {
  textMultiplier = 0.55;
}
// 11
if (fontScale >= 3) {
  textMultiplier = 0.475;
}
// 12
if (fontScale >= 3.5) {
  textMultiplier = 0.4;
}

const u = (n: number, isText?: boolean): number => {
  const val = isText
    ? n * viewportMultiplier * textMultiplier
    : n * viewportMultiplier;
  return val;
};

export default u;
