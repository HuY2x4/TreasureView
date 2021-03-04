import React from 'react';
import {
  CodeSpan,
  Span,
  Section,
  Prompt,
  CodeBlock,
  TitleSmall,
  P,
} from '@/pages/skill/components';
import { SITE } from '@/pages/skill/components/Reference';
import { MENU_ITEM, getMenuItem } from '@/pages/skill/components/Anchor';
import styles from './index.less';
export const GITHUB_MENU: Array<MENU_ITEM> = [
  {
    title: '错误代码',
    id: 'error_code',
    childs: [
      {
        title: 'errno 10054',
        id: 'errno_10054',
      },
    ],
  },
];
export const GITHUB_REFERENCE: Array<SITE> = [
  {
    title: '偶遇OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054',
    url: 'https://zhuanlan.zhihu.com/p/273370216',
    date: '2020/11/4',
    website: '知乎',
  },
];
interface Props {}

export default function (props: Props) {
  return (
    <div>
      <Section
        title={getMenuItem(GITHUB_MENU, 'error_code').title}
        level={1}
        id={'error_code'}
        className={styles.title_error_code}
      >
        <Section
          title={getMenuItem(GITHUB_MENU, 'errno_10054').title}
          level={1}
          id={'errno_10054'}
          className={styles.title_errno_10054}
        >
          <P>
            <CodeSpan>
              OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054
            </CodeSpan>
          </P>
          <P>
            <TitleSmall>现象:</TitleSmall>
            <br />
            pull，push都失败，报这个问题
          </P>
          <P>
            <TitleSmall>解决方法:</TitleSmall>
            <br />
            参考{' '}
            <a href="https://zhuanlan.zhihu.com/p/273370216" target="_blank">
              偶遇OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054
            </a>
            <CodeBlock style={{ margin: '4px 0' }}>
              {`
                                如果你已经在git命令行尝试过如下方法，
                                方法一：用压缩的方式进行下载
                                
                                git config --global --add core.compression -1

                                方法二：.增大缓存大小
                                524288000表示增至500兆，1048576000表示增至1G
                                
                                git config --global http.postBuffer 524288000

                                方法三：利用ssh下载
                                
                                git clone git://github.com/XX/XXXX.git

                                方法四：安全设置问题
                                
                                git config http.sslVerify "false"
                            `}
            </CodeBlock>
            先采用了方法二，可以pull，但还是不能push，然后采用方法四，第一次不能push，过了一会第二次就ok了
          </P>
        </Section>
      </Section>
    </div>
  );
}
