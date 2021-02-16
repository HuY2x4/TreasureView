import React, { Component } from 'react';
import styles from './index.module.scss';
import BackgroundBorad from '@/pages/comp/components/BackgroundBorad';
export default class index extends Component {
  render() {
    return (
      <BackgroundBorad background="#1a1e23">
        <div>
          <h1 className={`${styles.title} ${styles['slide-bar']}`}>
            I'm alphardex.
          </h1>
          <p className={`${styles.subtitle} ${styles['slide-bar']}`}>
            A CSS Wizard
          </p>
        </div>
      </BackgroundBorad>
    );
  }
}
