import React, { Component } from 'react';
import styles from './index.less';
import { Carousel } from 'antd';
import Button1Border from '@/components/display/button/Button1Border';
export const filmList = [
  {
    name: '西部世界',
    imgUrl: require('@/assets/carousel/full_xbsj.jpg'),
    namePosition: '',
  },
  {
    name: '后翼弃兵',
    imgUrl: require('@/assets/carousel/full_hyqb.jpg'),
    namePosition: '',
  },
];

export default class CarouselAntd extends Component {
  render() {
    return (
      <Carousel effect="fade">
        <div className={styles.item_wrap}>
          <img
            src={require('@/assets/carousel/full_xbsj.jpg')}
            alt=""
            className={styles.item_img}
          />
          <div className={styles.btn_wrap}>
            <Button1Border text="西部世界" color={17} />
          </div>
        </div>
        <div className={styles.item_wrap}>
          <img
            src={require('@/assets/carousel/full_hyqb.jpg')}
            alt=""
            className={styles.item_img}
          />
        </div>
      </Carousel>
    );
  }
}
