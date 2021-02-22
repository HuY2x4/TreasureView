import React from 'react';
import styles from './index.less';
export interface MENU_ITEM {
  title: string;
  id: string;
  childs?: Array<MENU_ITEM>;
}
interface Props {
  data: Array<MENU_ITEM>;
  curKey?: string;
}

// 获取某一个目录
export const getMenuItem = (menu: MENU_ITEM[], id: string): MENU_ITEM => {
  let target = { title: '', id: '' };

  menu.find((val: MENU_ITEM) => {
    if (val.id === id) {
      target = val;
      return true;
    }
    if (val.childs) {
      target = getMenuItem(val.childs, id);
      return true;
    } else {
      return false;
    }
  });

  return target;
};

export default function (props: Props) {
  const { data = [], curKey } = props;

  const turnToAnchor = (id: string) => {
    window.location.href = '#' + id;
  };

  const getLiNode = (node: MENU_ITEM, index: number) => {
    return (
      <li key={index} className={styles.menu_item}>
        <span
          className={styles.menu_item_text}
          style={{ color: curKey == node.id && 'blue' }}
          onClick={() => {
            turnToAnchor(node.id);
          }}
        >
          {node.title}
        </span>
        {node.childs && (
          <ul className={styles.menu_list}>
            {node.childs.map((nodeChild: MENU_ITEM, childIndex: number) => {
              return getLiNode(nodeChild, childIndex);
            })}
          </ul>
        )}
      </li>
    );
  };
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>目录</h3>
      <ul className={styles.menu_list}>
        {data.map((val: MENU_ITEM, index: number) => {
          return getLiNode(val, index);
        })}
      </ul>
    </div>
  );
}
