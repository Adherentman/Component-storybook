import {
	fontSizeHeading1,
	fontSizeHeading2,
	fontSizeHeading3,
	fontSizeHeading4,
	fontSizeHeading5,
	fontSizeHeading6,
	fontSizeHeading7,
	fontSizeHeading8,
	fontSizeSuper,
	fontWeightMedium,
	fontWeightRegular,
	lineHeightHeading1,
	lineHeightHeading2,
	lineHeightHeading3,
	lineHeightHeading4,
	lineHeightHeading5,
	lineHeightHeading6,
	lineHeightHeading7,
	lineHeightHeading8,
	lineHeightSuper
} from "../../styles/typography";
import font from '../../utils/font';

export interface ItypographyStylesType {
	root: any,
	superStyle: any,
	sizeHeading1: any,
	sizeHeading2: any,
	sizeHeading3: any,
	sizeHeading4: any,
	sizeHeading5: any,
	sizeHeading6: any,
	sizeHeading7: any,
	sizeHeading8: any
}

export const typographyStyles: ItypographyStylesType = {
	root: {
		fontFamily: font(),
	},
	superStyle: {
		fontSize: fontSizeSuper,
		fontWeight: fontWeightMedium,
		lineHeight: lineHeightSuper,
	},
	// tslint:disable-next-line:object-literal-sort-keys
	sizeHeading1: {
		fontSize: fontSizeHeading1,
		fontWeight: fontWeightRegular,
		lineHeight: lineHeightHeading1,
	},
	sizeHeading2: {
		fontSize: fontSizeHeading2,
		fontWeight: fontWeightRegular,
		lineHeight: lineHeightHeading2,
	},
	sizeHeading3: {
		fontSize: fontSizeHeading3,
		fontWeight: fontWeightRegular,
		lineHeight: lineHeightHeading3,
	},
	sizeHeading4: {
		fontSize: fontSizeHeading4,
		fontWeight: fontWeightRegular,
		lineHeight: lineHeightHeading4,
	},
	sizeHeading5: {
		fontSize: fontSizeHeading5,
		fontWeight: fontWeightRegular,
		lineHeight: lineHeightHeading5,
	},
	sizeHeading6: {
		fontSize: fontSizeHeading6,
		fontWeight: fontWeightRegular,
		lineHeight: lineHeightHeading6
	},
	sizeHeading7: {
		fontSize: fontSizeHeading7,
		fontWeight: fontWeightRegular,
		lineHeight: lineHeightHeading7
	},
	sizeHeading8: {
		fontSize: fontSizeHeading8,
		fontWeight: fontWeightRegular,
		lineHeight: lineHeightHeading8
	}
};
 