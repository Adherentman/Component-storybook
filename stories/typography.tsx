import * as React from 'react';
import {Typography} from '../src/components';
import styles from './styles.css';

function TypographyStory() {
  return (
    <div className={styles.main}>
      <h1>Typography</h1>

      <div>
        <div className={styles.smallText}>
          <small>Super</small>
        </div>
        <Typography size="super">Super Typography</Typography>
      </div>
      <br/>

      <div>
        <div className={styles.smallText}>
          <small>H1</small>
        </div>
        <Typography size="H1">H1 Typography</Typography>
      </div>
      <br/>

      <div>
        <div className={styles.smallText}>
          <small>H2</small>
        </div>
        <Typography size="H2">H2 Typography</Typography>
      </div>
      <br/>

      <div>
        <div className={styles.smallText}>
          <small>H3</small>
        </div>
        <Typography size="H3">H3 Typography</Typography>
      </div>
      <br/>

      <div>
        <div className={styles.smallText}>
          <small>H4</small>
        </div>
        <Typography size="H4">H4 Typography</Typography>
      </div>
      <br/>

      <div>
        <div className={styles.smallText}>
          <small>H5</small>
        </div>
        <Typography size="H5">H5 Typography</Typography>
      </div>
      <br/>

      <div>
        <div className={styles.smallText}>
          <small>H6</small>
        </div>
        <Typography size="H6">H6 Typography</Typography>
      </div>
      <br/>

      <div>
        <div className={styles.smallText}>
          <small>H7</small>
        </div>
        <Typography size="H7">H7 Typography</Typography>
      </div>
      <br/>

      <div>
        <div className={styles.smallText}>
          <small>H8</small>
        </div>
        <Typography size="H8">H8 Typography</Typography>
      </div>
      <br/>

    </div>
  )
}

export default TypographyStory;