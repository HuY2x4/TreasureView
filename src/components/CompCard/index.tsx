import React, { useState, useEffect, Suspense } from 'react';
import styles from './index.less';
import { ReloadOutlined } from '@ant-design/icons';
import loadable from '@/utils/loadable';
interface Props {
  title: React.ReactNode;
  path: string;
}

export default function CompCard(props: Props) {
  useEffect(() => {}, []);
  // const Button = loadable(() => import(`@/pages/comp/content/common/button/shadowButton`))
  const Button = loadable(() => import(`./${'test'}`).then((a) => a));
  // const Button = React.lazy(() => import(`@${'/pages/comp/content/common/button/shadowButton'}`))
  // const Button = React.lazy(() => import(`./${'test'}`))

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>
        <Suspense fallback={<div>loading</div>}>
          <Button />
        </Suspense>
      </div>
      <div className={styles.operation}>
        <ReloadOutlined className={styles.icon} />
      </div>
    </div>
  );
}
