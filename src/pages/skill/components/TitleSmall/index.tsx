import React from 'react';
import styles from './index.less';
interface Props {
  children?: React.ReactNode;
  style?: any;
}

export default function (props: Props) {
  return (
    <span className={styles.font} style={props.style}>
      {props.children}
    </span>
  );
}
