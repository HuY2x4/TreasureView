import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/pages/comp/components/BackgroundBorad';
export default class index extends Component {
  render() {
    const texts = ['Make awesome CSS animation', 'This is my animation'];
    return (
      <BackgroundBorad background={'#1A1E23'}>
        <form>
          {texts.map((val, index) => {
            return (
              <label key={index} className={styles.label}>
                <input type="checkbox" />
                <i className={styles.check}></i>
                <span>{val}</span>
              </label>
            );
          })}
        </form>
      </BackgroundBorad>
    );
  }
}
