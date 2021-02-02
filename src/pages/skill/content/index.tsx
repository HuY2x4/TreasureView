import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { MENUS } from '../menu/menu';

const _connect: any = connect;
@_connect((state: any) => ({
  curType: state.skills.curType,
}))
export default class content extends Component<any> {
  // 获取当前type的数据
  getCurTypeNode = () => {
    const allType = MENUS.reduce((list: any, item) => {
      list.push(...item.childs);
      return list;
    }, []);
    return (
      allType.find((val: any) => val.key == this.props.curType)?.node || []
    );
  };

  render() {
    const Node = this.getCurTypeNode();
    return (
      <div className={styles.wrap}>
        <Node />
      </div>
    );
  }
}
