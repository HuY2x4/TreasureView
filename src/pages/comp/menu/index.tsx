import React, { Component } from 'react';
import { history } from 'umi';
import { Badge } from 'antd';
import { MENUS } from './menu';
import styles from './index.less';
export default class menu extends Component {
  goPath = (path: string) => {
    history.push('/components' + path);
  };
  render() {
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
                      <Badge
                        key={itemIndex}
                        count={item.size}
                        offset={[-10, 3]}
                        size="small"
                      >
                        <span
                          className={styles.type}
                          onClick={this.goPath.bind(this, item.path)}
                        >
                          {item.name}
                        </span>
                      </Badge>
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
