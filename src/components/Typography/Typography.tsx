import * as classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import injectSheet from "react-jss";
import { ItypographyStylesType, typographyStyles } from "./TypographyStyles";

export type TypographySizeType =
  | "super"
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "H7"
  | "H8"
  | "article"
  | "articleSmall"
  | "bodySmall"
  | "accent"
  | "uppercase";

export interface IBaseTypographyProps {
  size?: TypographySizeType;
  classes: ItypographyStylesType;
  children: React.ReactNode;
}
class Typography extends React.Component<IBaseTypographyProps> {
  public static propTypes = {
    size: PropTypes.oneOf([
      "super",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "H7",
      "H8",
      "article",
      "articleSmall",
      "bodySmall",
      "accent",
      "uppercase"
    ])
    // children:
  };
  public render() {
    const { size, classes, children } = this.props;

    const typographyStyle = classNames(classes.root, {
      [classes.superStyle]: size === "super",
      [classes.sizeHeading1]: size === "H1",
      [classes.sizeHeading2]: size === "H2",
      [classes.sizeHeading3]: size === "H3",
      [classes.sizeHeading4]: size === "H4",
      [classes.sizeHeading5]: size === "H5",
      [classes.sizeHeading6]: size === "H6",
      [classes.sizeHeading7]: size === "H7",
      [classes.sizeHeading8]: size === "H8",
      [classes.sizeBodyArticle]: size === "article",
      [classes.sizeBodyArticleSmall]: size === "articleSmall",
      [classes.sizeBodySmall]: size === "bodySmall",
      [classes.sizeAccent]: size === "accent",
      [classes.sizeUppercase]: size === "uppercase"
    });
    return (
      <React.Fragment>
        <span className={typographyStyle}>{children}</span>
      </React.Fragment>
    );
  }
}

export default injectSheet(typographyStyles)(Typography);
