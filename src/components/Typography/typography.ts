import {
  fontSizeSuper,
  fontWeightMedium,
  lineHeightSuper
} from "../../styles/typography";
import font from '../../utils/font';

const typographyStyles: any = {
  superText:{
    fontFamily: font(),
    fontSize: `${fontSizeSuper}px`,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightSuper,
  }
};

export default typographyStyles;