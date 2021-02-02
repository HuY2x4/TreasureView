import React, { useState, useEffect } from 'react';
import styles from './index.less';
interface Props {}

export default function Footer(props: Props) {
  useEffect(() => {}, []);

  return (
    <div className={styles.wrap}>
      <p className={styles.text}>Learn</p>
    </div>
  );
}
