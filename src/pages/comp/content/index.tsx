import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from './index.less';
import CompCard from '@/components/CompCard';
import common_button from './common/button';
export default class Content extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <Row gutter={20}>
          {common_button.map((val, index) => {
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
