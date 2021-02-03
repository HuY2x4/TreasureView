import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/components/BackgroundBorad';
export default class index extends Component {
  render() {
    return (
      <BackgroundBorad>
        <div className={styles.wrap}>
          <div className={styles['frosted-glass']}>
            <h1 className={styles.title}>HuYx</h1>
          </div>
        </div>
      </BackgroundBorad>
    );
  }
}
