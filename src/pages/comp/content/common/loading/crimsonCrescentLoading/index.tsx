import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/components/private/BackgroundBorad';
export default class index extends Component {
  render() {
    return (
      <BackgroundBorad background={'#000'}>
        <div className={styles.loading}></div>
      </BackgroundBorad>
    );
  }
}
