import React, { Component } from 'react';
import styles from './index.less';
import CarouselAntd from './CarouselAntd';
import Content from './Content';
import list from './data';
export default class Film extends Component {
  render() {
    return (
      <div>
        <div className={styles.carousel_wrap}>
          <CarouselAntd />
        </div>
        <div className={styles.content}>
          <Content data={list} />
        </div>
      </div>
    );
  }
}
