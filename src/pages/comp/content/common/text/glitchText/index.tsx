import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/components/private/BackgroundBorad';
export default class index extends Component {
  random = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  render() {
    const sliceNum = 20;
    const text = 'HuYx;Gate';
    const spanList = [];
    for (let i = 0; i <= sliceNum; i++) {
      let obj = {};
      if (i !== sliceNum) {
        obj = { animationDelay: `${800 + this.random(100, 300)}ms` };
      }
      const span = <span style={{ '--i': i + 1, ...obj }}>{text}</span>;
      spanList.push(span);
    }
    const glitchText = (
      <div className={styles.glitch} style={{ '--slice-count': sliceNum }}>
        {spanList}
      </div>
    );
    const barList = [];
    for (let i = 0; i < 5; i++) {
      const bar = <div className={styles.bar}></div>;
      barList.push(bar);
    }
    return (
      <BackgroundBorad background="#1a1e23">
        <h1 className={styles['cross-bar-glitch']} data-slice={sliceNum}>
          {glitchText}
          <div className={styles.bars}>{barList}</div>
        </h1>
      </BackgroundBorad>
    );
  }
}
