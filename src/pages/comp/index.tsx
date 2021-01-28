import React, { Component } from 'react';
import Menu from './menu';
import Content from './content';
import styles from './index.less';
export default class Comp extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.side}>
          <Menu />
        </div>
        <div className={styles.content}>
          <Content />
        </div>
      </div>
    );
  }
}
