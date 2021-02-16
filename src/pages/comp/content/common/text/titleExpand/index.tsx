import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/pages/comp/components/BackgroundBorad';
export default class TitleExpand extends Component {
  state = {
    text: 'this is my title',
  };

  render() {
    let delay = 0.3;
    let letters = this.state.text.split('');
    let middle = letters.filter((e) => e !== '').length / 2;
    return (
      <BackgroundBorad background="#1a1e23">
        <div className={styles.title}>
          {letters.map((val, index) => {
            return (
              <span
                key={index}
                style={{
                  animationDelay: `${delay + Math.abs(index - middle) * 0.1}s`,
                }}
              >
                {val}
              </span>
            );
          })}
        </div>
      </BackgroundBorad>
    );
  }
}
