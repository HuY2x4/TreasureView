import React, { Component } from 'react';
import styles from './index.less';
import BackgroundBorad from '@/components/BackgroundBorad';
export default class index extends Component {
  render() {
    return (
      <BackgroundBorad background="#1a1e23">
        <button
          className={`${styles.btn} ${styles['btn-primary']} ${styles['btn-ghost']} ${styles['btn-multiple-border-stroke']}`}
        >
          {[1, 2, 3].map((val, index) => {
            return (
              <div key={index} className={styles['btn-borders-group']}>
                <div className={styles['border-top']}></div>
                <div className={styles['border-right']}></div>
                <div className={styles['border-bottom']}></div>
                <div className={styles['border-left']}></div>
              </div>
            );
          })}
          <span className={styles['btn-text']}>start</span>
        </button>
      </BackgroundBorad>
    );
  }
}
