import React, { Component } from 'react';
import styles from './index.less';
import BackgroundBorad from '@/components/BackgroundBorad';
//var()不兼容IE
export default class index extends Component {
  render() {
    return (
      <BackgroundBorad background="#1a1e23">
        <button
          data-text="start"
          className={`${styles.btn} ${styles['btn-primary']} ${styles['btn-ghost']} ${styles['btn-border-stroke']} ${styles['btn-text-float-up']}`}
        >
          <div className={styles['btn-borders']}>
            <div className={styles['border-top']}></div>
            <div className={styles['border-right']}></div>
            <div className={styles['border-bottom']}></div>
            <div className={styles['border-left']}></div>
          </div>
          <span className={styles['btn-text']}>start</span>
        </button>
      </BackgroundBorad>
    );
  }
}
