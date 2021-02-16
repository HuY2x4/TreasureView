import React, { useState, useEffect } from 'react';
import styles from './index.less';

export interface SITE {
  title: string;
  url: string;
  date: string;
  website: string;
}

interface Props {
  data: Array<SITE>;
}

export default function (props: Props) {
  const { data } = props;

  return (
    <div className={styles.wrap}>
      <header className={styles.title}>文献参考</header>
      <main className={styles.main}>
        <ul>
          {data.map((val: SITE, index: number) => {
            return (
              <li key={index} className={styles.item}>
                <pre className={styles.pre}>
                  {val.website} - {val.date} -{' '}
                </pre>
                <a href={val.url} target="_blank" className={styles.url}>
                  {val.title}
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
