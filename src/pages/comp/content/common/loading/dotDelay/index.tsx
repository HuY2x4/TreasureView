import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/components/BackgroundBorad';
export default class DotDelay extends Component {
  render() {
    return (
      <BackgroundBorad>
        <div className={styles.loading}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </BackgroundBorad>
    );
  }
}
