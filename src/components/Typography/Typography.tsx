import * as classNames from "classnames";
import * as React from 'react';
import injectSheet from 'react-jss';
import { ItypographyStylesType, typographyStyles } from './typographyStyles';

export type TypographySizeType = "super" | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'H7' | 'H8';

export interface IBaseTypographyProps {
  size?: TypographySizeType;
  classes: ItypographyStylesType;
  children: React.ReactNode;
}
class Typography extends React.Component<IBaseTypographyProps> {
  public render () {
    const { size, classes, children } = this.props;

    const typographyStyle = classNames(
      classes.root,
      {
        [classes.superStyle]: size === 'super',
        [classes.sizeHeading1]: size === 'H1',
        [classes.sizeHeading2]: size === 'H2',
        [classes.sizeHeading3]: size === 'H3',
        [classes.sizeHeading4]: size === 'H4',
        [classes.sizeHeading5]: size === 'H5',
        [classes.sizeHeading6]: size === 'H6',
        [classes.sizeHeading7]: size === 'H7',
        [classes.sizeHeading8]: size === 'H8',
      }
    )
    return <React.Fragment>
        <span className={typographyStyle}>{children}</span>
    </React.Fragment>
  }
}


export default injectSheet(typographyStyles)(Typography);