import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/components/BackgroundBorad';
export default class Snow extends Component {
  render() {
    const snowNum = 200; //和scss里对应
    let snowArr = Array.apply(null, Array(snowNum)).map(function (item, i) {
      return i;
    });
    return (
      <BackgroundBorad>
        <div className={styles.wrap}>
          {snowArr.map((val, index) => {
            return <div className={styles.snow} key={index}></div>;
          })}
        </div>
      </BackgroundBorad>
    );
  }
}
