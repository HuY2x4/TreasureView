import React from 'react';
import styles from './index.less';
import { InfoCircleOutlined } from '@ant-design/icons';
interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: any;
}

export default function (props: Props) {
  const { className = '', style = {}, children } = props;

  return (
    <span className={`${styles.span} ${className}`} style={style}>
      <InfoCircleOutlined style={{ color: '#616161', marginRight: 4 }} />
      {children}
    </span>
  );
}
