import React, { Component } from 'react';
import styles from './index.less';
import BackgroundBorad from '@/components/private/BackgroundBorad';
import Button1Border from '@/components/display/button/Button1Border';
export default class index extends Component {
  render() {
    return (
      <BackgroundBorad background="#1a1e23">
        <Button1Border text={'hover me'} />
      </BackgroundBorad>
    );
  }
}
