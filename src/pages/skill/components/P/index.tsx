import React from 'react';
import styles from './index.less';
interface Props {
  children?: React.ReactNode;
}

export default function (props: Props) {
  return <p className={styles.p}>{props.children}</p>;
}
