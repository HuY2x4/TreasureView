import React, { Component } from 'react';
import { history } from 'umi';
import { connect } from 'dva';
import { Badge } from 'antd';
import { MENUS } from './menu';
import styles from './index.less';

const _connect: any = connect;
@_connect((state: any) => ({
  curType: state.skills.curType,
}))
class menu extends Component<any> {
  goDetail = (item: any) => {
    this.props.dispatch({
      type: 'skills/save',
      payload: {
        curType: item.key,
      },
    });
    history.push('/skills' + item.path);
  };
  render() {
    const { curType } = this.props;
    return (
      <div className={styles.wrap}>
        <ul className={styles.list_ul}>
          {MENUS.map((val, index) => {
            return (
              <li key={index} className={styles.list_li}>
                <h5 className={styles.title}>{val.name}</h5>
                <div className={styles.types_wrap}>
                  {val.childs.map((item, itemIndex) => {
                    return (
                      <div
                        key={itemIndex}
                        className={`${styles.type} ${
                          curType == item.key && styles.type_choose
                        }`}
                        onClick={this.goDetail.bind(this, item)}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default menu;
