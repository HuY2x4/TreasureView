import React, { Component } from 'react';
import styles from './index.less';
import BackgroundBorad from '@/pages/comp/components/BackgroundBorad';
//var()不兼容IE
interface Props {
  text?: string;
  color?: number; // hsl - h
}
export default class Button1Border extends Component<Props> {
  render() {
    const { text, color } = this.props;
    return (
      <button
        data-text={text}
        className={`${styles.btn} ${styles['btn-primary']} ${styles['btn-ghost']} ${styles['btn-border-stroke']} ${styles['btn-text-float-up']}`}
        style={{ '--hue': color }}
      >
        <div className={styles['btn-borders']}>
          <div className={styles['border-top']}></div>
          <div className={styles['border-right']}></div>
          <div className={styles['border-bottom']}></div>
          <div className={styles['border-left']}></div>
        </div>
        <span className={styles['btn-text']}>{text}</span>
      </button>
    );
  }
}
