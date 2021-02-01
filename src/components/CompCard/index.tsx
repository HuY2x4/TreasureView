import React, { useState, useEffect, Suspense } from 'react';
import styles from './index.less';
import { ReloadOutlined } from '@ant-design/icons';
interface Props {
  title: React.ReactNode;
  node: any;
}

export default function CompCard(props: Props) {
  useEffect(() => {}, []);

  // 问题：用字符串模板会解析不出路径
  // const Button = loadable(() => import(`./${a}/index`));
  // const Button = React.lazy(() => import(`@/${'pages/comp/content/common/button/shadowButton'}`))

  const { node: Node } = props;

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>
        <Node />
      </div>
      <div className={styles.operation}>
        <ReloadOutlined className={styles.icon} />
      </div>
    </div>
  );
}
