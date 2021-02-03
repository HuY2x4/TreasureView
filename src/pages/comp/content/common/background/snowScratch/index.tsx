import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/components/BackgroundBorad';
export default class index extends Component {
  render() {
    const list = [];
    for (let i = 0; i < 100; i++) {
      list.push(<div className={styles.snow}></div>);
    }
    return (
      <BackgroundBorad background="#000">
        <p>Emilia</p>
        <div className={styles.card}>{list}</div>
      </BackgroundBorad>
    );
  }
}
