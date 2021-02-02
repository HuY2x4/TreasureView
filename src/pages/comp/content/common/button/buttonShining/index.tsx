import React, { Component } from 'react';
import styles from './index.less';
import BackgroundBorad from '@/components/BackgroundBorad';
export default class index extends Component {
  render() {
    return (
      <BackgroundBorad background="#1a1e23">
        <button
          className={`${styles.btn} ${styles['btn-primary']} ${styles['btn-ghost']} ${styles['btn-shine']} `}
        >
          hover me
        </button>
      </BackgroundBorad>
    );
  }
}
