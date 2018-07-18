import * as classNames from "classnames";
import * as React from 'react';
// import {
//   fontSizeSuper,
//   fontWeightMedium,
//   lineHeightSuper
// } from "../../styles/typography";
// import styles from './a.css';
import typographyStyles from '../Typography/typography';

function TextSuper({children, ...props}: any) {

  const { superText } = props;

  const typographyStyle = classNames({
    [`${typographyStyles.superText}`]: superText
  })

  return <React.Fragment>
      {
        // tslint:disable-next-line:no-console
        console.log(typographyStyle)
      }
    <div className={typographyStyle}>
      {children}
    </div>
  </React.Fragment>
}

export default TextSuper;