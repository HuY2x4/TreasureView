import React, { useState, useEffect, Suspense } from 'react';
import styles from './index.less';
import { Tooltip } from 'antd';
import { ReloadOutlined, LinkOutlined, TagOutlined } from '@ant-design/icons';
import { useStateCallback } from '@/utils/utils';
interface Ref {
  title: string;
  url: string;
}

interface Props {
  title: React.ReactNode;
  node: any;
  cardHeight: number;
  remark?: string;
  reference?: Array<Ref>;
  hasConvert?: Boolean; // 是否完成组件化
}

export default function CompCard(props: Props) {
  const [nodeVisible, setNodeVisible] = useStateCallback(true);
  const [iconRotate, setIconRotate] = useState(false);

  useEffect(() => {}, []);

  // 问题：用字符串模板会解析不出路径
  // const Button = loadable(() => import(`./${a}/index`));
  // const Button = React.lazy(() => import(`@/${'pages/comp/content/common/button/shadowButton'}`))

  function reload() {
    // 重新加载按钮的自转动效
    setIconRotate(true);
    setTimeout(() => {
      setIconRotate(false);
    }, 1000);

    // 通过移除node节点来实现重新挂载
    setNodeVisible(false, () => {
      // 待优化 - 太快会导致不会重新渲染，class自带的回调是可以的
      setTimeout(() => {
        setNodeVisible(true);
      }, 100);
    });
  }

  // 自定义卡片的高度
  function getCardHeightStyles(cardHeight: number) {
    switch (cardHeight) {
      case 1:
        return styles.wrap_1height;
      case 2:
        return styles.wrap_2height;
      default:
        return styles.wrap_1height;
    }
  }

  // 获取 悬浮框 组件
  function getToolTipComp(data: any, title: string) {
    return (
      <div className={styles.reference}>
        <h4 className={styles.ref_title}>{title}：</h4>
        <ul className={styles.ref_content}>
          {title == '参考资料'
            ? data.map((val: any, index: number) => {
                return (
                  <li key={index} className={styles.ref_item}>
                    <span className={styles.dot} />
                    <a href={val.url} target="_blank">
                      {val.title}
                    </a>
                  </li>
                );
              })
            : data}
        </ul>
      </div>
    );
  }
  const { node: Node, cardHeight = 1, hasConvert } = props;

  return (
    <div className={`${styles.wrap} ${getCardHeightStyles(cardHeight)}`}>
      <div className={styles.topBar}>
        <span className={styles.title}>{props.title}</span>

        <div className={styles.intro}>
          {props.remark && (
            <Tooltip title={getToolTipComp(props.remark, '技术分析')}>
              <TagOutlined className={styles.icon} />
            </Tooltip>
          )}
          {props.reference && (
            <Tooltip title={getToolTipComp(props.reference, '参考资料')}>
              <LinkOutlined className={styles.icon} />
            </Tooltip>
          )}
        </div>
      </div>
      <div className={styles.content}>{nodeVisible && <Node />}</div>
      <div className={styles.operation}>
        <ReloadOutlined
          className={`${styles.icon} ${iconRotate && styles.icon_rotate}`}
          onClick={reload}
        />
      </div>
      {hasConvert && <div></div>}
    </div>
  );
}
