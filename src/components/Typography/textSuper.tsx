import * as React from 'react';
import { textSuper } from '..//Typography/typography';

function TextSuper({children}: any) {
  return <React.Fragment>
    <div style={textSuper()}>
      {children}
    </div>
  </React.Fragment>
}

export default TextSuper;