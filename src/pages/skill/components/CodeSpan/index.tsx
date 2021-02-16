import React, { useState, useEffect } from 'react';
import styles from './index.less';

interface Props {
  children: React.ReactNode;
}

export default function (props: Props) {
  return <span className={styles.wrap}>{props.children}</span>;
}
