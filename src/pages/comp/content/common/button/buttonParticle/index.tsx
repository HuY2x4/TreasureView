import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/pages/comp/components/BackgroundBorad';
export default class index extends Component {
  render() {
    return (
      <BackgroundBorad background="#eceffc">
        <button
          className={`${styles.btn} ${styles['btn-pink']} ${styles['btn-bubbles']}`}
        >
          click me
        </button>
      </BackgroundBorad>
    );
  }
}
