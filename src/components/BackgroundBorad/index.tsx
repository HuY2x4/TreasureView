import React, { useState, useEffect } from 'react';
import styles from './index.less';
export default function (props: any) {
  const { background = '#fff' } = props;
  return (
    <div className={styles.wrap}>
      <div style={{ background: background }} className={styles.inner}>
        {props.children}
      </div>
    </div>
  );
}
