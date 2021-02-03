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
        {/* {this.getCurTypeData().map((val: any, index: number) => {
            return (
              <Col key={index} span={val.span} className={styles.card_wrap}>
                <CompCard title={val.name} node={val.node} />
              </Col>
            );
          })} */}
        {this.getCurTypeData().map((rowItem: any, rowIndex: number) => {
          return (
            <Row gutter={20} key={rowIndex}>
              {rowItem.colChilds.map((colItem: any, colIndex: number) => {
                return (
                  <Col key={colIndex} span={colItem.span}>
                    {colItem.rowChilds ? (
                      <>
                        {colItem.rowChilds.map(
                          (innerColList: any, innerRowIndex: number) => {
                            return (
                              <Row gutter={20} key={innerRowIndex}>
                                {innerColList.map(
                                  (
                                    innerColItem: any,
                                    innerColIndex: number,
                                  ) => {
                                    return (
                                      <Col
                                        key={innerColIndex}
                                        span={innerColItem.span}
                                        className={styles.card_wrap}
                                      >
                                        <CompCard
                                          title={innerColItem.name}
                                          node={innerColItem.node}
                                          cardHeight={1}
                                        />
                                      </Col>
                                    );
                                  },
                                )}
                              </Row>
                            );
                          },
                        )}
                      </>
                    ) : (
                      <CompCard
                        title={colItem.name}
                        node={colItem.node}
                        cardHeight={rowItem.height}
                      />
                    )}
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </div>
    );
  }
}
