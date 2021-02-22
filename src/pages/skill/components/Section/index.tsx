import React from 'react';
import styles from './index.less';
interface Props {
  children?: React.ReactNode;
  title: string;
  level?: number;
  id?: string;
  className?: string;
}

// 映射：段落等级-标题字体大小
export const LEVEL_FONT_SIZE: any = {
  0: '24px',
  1: '23px',
  2: '22px',
  3: '21px',
  4: '20px',
};

export default function (props: Props) {
  const { level = 1, children, id, className } = props;

  return (
    <section className={className}>
      <header
        className={styles.title}
        style={{ fontSize: LEVEL_FONT_SIZE[level] }}
        id={id}
      >
        {props.title}
      </header>
      <main className={styles.main}>{children}</main>
    </section>
  );
}
