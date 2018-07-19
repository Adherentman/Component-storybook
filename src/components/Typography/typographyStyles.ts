import {
  fontSizeSuper,
  fontWeightMedium,
  lineHeightSuper
} from "../../styles/typography";
import font from '../../utils/font';

const typographyStyles: any = {
	root: {
		fontFamily: font(),
	},
	superStyle: {
		fontSize: fontSizeSuper,
		fontWeight: fontWeightMedium,
		lineHeight: lineHeightSuper,
	}
};

export default typographyStyles;
 