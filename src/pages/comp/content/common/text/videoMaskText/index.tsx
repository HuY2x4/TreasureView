import React, { Component } from 'react';
import styles from './index.module.scss';
export default class index extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <video
          autoplay
          muted
          loop
          preload
          poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
        >
          <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
          <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
        </video>
        <h1>ocean</h1>
      </div>
    );
  }
}
