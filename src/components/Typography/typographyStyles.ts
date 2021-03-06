import {
  fontSizeAccent,
  fontSizeBodyArticle,
  fontSizeBodyArticleSmall,
  fontSizeBodySmall,
  fontSizeHeading1,
  fontSizeHeading2,
  fontSizeHeading3,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeHeading6,
  fontSizeSuper,
  fontSizeUppercase,
  fontWeightMedium,
  fontWeightRegular,
  lineHeightAccent,
  lineHeightBodyArticle,
  lineHeightBodyArticleSmall,
  lineHeightBodySmall,
  lineHeightHeading1,
  lineHeightHeading2,
  lineHeightHeading3,
  lineHeightHeading4,
  lineHeightHeading5,
  lineHeightHeading6,
  lineHeightSuper,
  lineHeightUppercase
} from "../../styles/typography";
import font from "../../utils/font";

export interface ItypographyStylesType {
  root: any;
  superStyle: any;
  sizeHeading1: any;
  sizeHeading2: any;
  sizeHeading3: any;
  sizeHeading4: any;
  sizeHeading5: any;
  sizeHeading6: any;
  sizeBodyArticle: any;
  sizeBodyArticleSmall: any;
  sizeBodySmall: any;
  sizeAccent: any;
  sizeUppercase: any;
}

export const typographyStyles: ItypographyStylesType = {
  root: {
    fontFamily: font()
  },
  superStyle: {
    fontSize: fontSizeSuper,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightSuper
  },
  // tslint:disable-next-line:object-literal-sort-keys
  sizeHeading1: {
    fontSize: fontSizeHeading1,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightHeading1
  },
  sizeHeading2: {
    fontSize: fontSizeHeading2,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightHeading2
  },
  sizeHeading3: {
    fontSize: fontSizeHeading3,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightHeading3
  },
  sizeHeading4: {
    fontSize: fontSizeHeading4,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightHeading4
  },
  sizeHeading5: {
    fontSize: fontSizeHeading5,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightHeading5
  },
  sizeHeading6: {
    fontSize: fontSizeHeading6,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightHeading6
  },
  sizeBodyArticle: {
    fontSize: fontSizeBodyArticle,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightBodyArticle
  },
  sizeBodyArticleSmall: {
    fontSize: fontSizeBodyArticleSmall,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightBodyArticleSmall
  },
  sizeBodySmall: {
    fontSize: fontSizeBodySmall,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightBodySmall
  },
  sizeAccent: {
    fontSize: fontSizeAccent,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightAccent
  },
  sizeUppercase: {
    fontSize: fontSizeUppercase,
    fontWeight: fontWeightRegular,
    lineHeight: lineHeightUppercase
  }
};
