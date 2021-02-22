import React from 'react';
import styles from './index.less';
interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: any;
}

export default function (props: Props) {
  const { className = '', style = {}, children } = props;

  return (
    <span className={`${styles.span} ${className}`} style={style}>
      {children}
    </span>
  );
}
