import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'dva';
import styles from './index.less';
import CompCard from '@/components/CompCard';
import { MENUS } from '../menu/menu';

const _connect: any = connect;
@_connect((state: any) => ({
  curType: state.components.curType,
}))
export default class Content extends Component<any> {
  // 获取当前type的数据
  getCurTypeData = () => {
    const allType = MENUS.reduce((list: any, item) => {
      list.push(...item.childs);
      return list;
    }, []);
    return (
      allType.find((val: any) => val.key == this.props.curType)?.typeData || []
    );
  };

  render() {
    return (
      <div className={styles.wrap}>
        <Row gutter={20}>
          {this.getCurTypeData().map((val: any, index: number) => {
            return (
              <Col key={index} span={val.span} className={styles.card_wrap}>
                <CompCard title={val.name} node={val.node} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
