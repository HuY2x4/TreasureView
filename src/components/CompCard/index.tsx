import React, { useState, useEffect, Suspense } from 'react';
import styles from './index.less';
import { ReloadOutlined } from '@ant-design/icons';
import { useStateCallback } from '@/utils/utils';
interface Props {
  title: React.ReactNode;
  node: any;
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

  const { node: Node } = props;

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>{nodeVisible && <Node />}</div>
      <div className={styles.operation}>
        <ReloadOutlined
          className={`${styles.icon} ${iconRotate && styles.icon_rotate}`}
          onClick={reload}
        />
      </div>
    </div>
  );
}
