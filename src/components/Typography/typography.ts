import {
  fontSizeSuper,
  fontWeightMedium,
  lineHeightSuper
} from "../../styles/typography";
import font from '../../utils/font';

export function textSuper() {
  return {
    fontFamily: font(),
    fontSize: `${fontSizeSuper}px`,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightSuper,
  };
}