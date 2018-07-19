import * as classNames from "classnames";
import * as React from 'react';
import injectSheet from 'react-jss';
import typographyStyles from '../Typography/typographyStyles';

function Typography({children, ...props}: any) {

  const { size, classes } = props;

  const typographyStyle = classNames(
    classes.root,
    {
      [classes.superStyle]: size === 'superText'
    }
)

  return <React.Fragment>
    <div className={typographyStyle}>
      <span>{children}</span>
    </div>
  </React.Fragment>
}

export default injectSheet(typographyStyles)(Typography);