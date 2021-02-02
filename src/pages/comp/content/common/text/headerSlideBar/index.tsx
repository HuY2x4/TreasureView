import React, { Component } from 'react';
import styles from './index.module.scss';
export default class index extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={`${styles.title} ${styles['slide-bar']}`}>
          I'm alphardex.
        </h1>
        <p className={`${styles.subtitle} ${styles['slide-bar']}`}>
          A CSS Wizard
        </p>
      </div>
    );
  }
}
