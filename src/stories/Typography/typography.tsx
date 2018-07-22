import * as React from 'react';
import { Typography } from '../../components';
// import styles from '../styles.css';

const data = [
  {size: "super", value: "Super Typography" },
  {size: "H1", value: "H1 Typography" },
  {size: "H2", value: "H2 Typography" },
  {size: "H3", value: "H3 Typography" },
  {size: "H4", value: "H4 Typography" },
  {size: "H5", value: "H5 Typography" },
  {size: "H6", value: "H6 Typography" },
  {size: "H7", value: "H7 Typography" },
  {size: "H8", value: "H8 Typography" },
  {size: "article", value: "article Typography" },
  {size: "articleSmall", value: "articleSmall Typography" },
  {size: "bodySmall", value: "bodySmall Typography" },
  {size: "accent", value: "accent Typography" },
  {size: "uppercase", value: "uppercase Typography" },
]

const styles = {
  main: {
    fontFamily: "Helvetica Neue', 'Helvetica', 'Segoe UI', 'Arial', sans-serif",
    lineHeigh: 1.4,
    maxWidth: 1290,
    // tslint:disable-next-line:object-literal-sort-keys
    margin: 15
  },
  smallText: {
    color: 'rgba(0, 0, 0, .3)',
    fontSize: '16px',
    lineHeight: 3,
    marginBottom: '1em',
  }
}
class TypographyStory extends React.Component {
  public render(){
    return(
      <div style={styles.main}>
        <h1>Typography</h1>
        {
          data.map((x, index) => (
            <React.Fragment key={index}>
              <div>
                <small style={styles.smallText}>{x.size}</small>
              </div>
              <Typography size={x.size}>{x.value}</Typography>
            </React.Fragment>
          ))
        }
      </div>
    )
  }
}

export default TypographyStory;