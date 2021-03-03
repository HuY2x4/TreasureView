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
import { Row, Col } from 'antd';
export const SCROLLBAR_MENU: Array<MENU_ITEM> = [
  {
    title: '滚动条样式',
    id: 'style',
  },
  {
    title: '滚动条滚动动画（兼容）',
    id: 'animation',
    childs: [
      {
        title: 'Element.scrollIntoView()',
        id: 'scrollIntoView',
      },
      {
        title: 'CSS:scroll-behavior',
        id: 'behavior',
      },
    ],
  },
];
export const SCROLLBAR_REFERENCE: Array<SITE> = [
  {
    title: 'CSS3自定义滚动条样式',
    url: 'https://www.cnblogs.com/ranyonsue/p/9487599.html',
    date: '2018/8/16',
    website: '博客园',
  },
  {
    title: '原生JS实现滚动条动画 （滚动到指定位置 / 返回顶部）',
    url: 'https://blog.csdn.net/qq_39624107/article/details/81132981',
    date: '2018/7/20',
    website: 'CSDN',
  },
  {
    title: '利用CSS的scroll-behavior和JS的scrollIntoView使页面滚动更加平滑',
    url: 'https://www.mybj123.com/4268.html',
    date: '2019/-/-',
    website: '码云笔记',
  },
  {
    title: 'Element.scrollIntoView()',
    url:
      'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView',
    date: 'unknow',
    website: '官网文档',
  },
];
interface Props {}

export default function (props: Props) {
  return (
    <div>
      <Section
        title={getMenuItem(SCROLLBAR_MENU, 'style').title}
        level={1}
        id={'style'}
        className={styles.title_style}
      >
        <P>
          <CodeBlock>
            {`
                        滚动条组成部分

                        1. ::-webkit-scrollbar 滚动条整体部分
                        
                        2. ::-webkit-scrollbar-thumb 滚动条里面的小方块，能向上向下移动（或向左向右移动）
                        
                        3. ::-webkit-scrollbar-track 滚动条的轨道（里面装有Thumb）
                        
                        4. ::-webkit-scrollbar-button 滚动条的轨道的两端按钮，由于通过点击微调小方块的位置。
                        
                        5. ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分
                        
                        6. ::-webkit-scrollbar-corner 边角，即垂直滚动条和水平滚动条相交的地方
                        
                        7. ::-webkit-resizer 两个滚动条的交汇处上用于拖动调整元素大小的小控件

                        其他伪类配置项见参考文献-CSS3自定义滚动条样式
                    `}
          </CodeBlock>
        </P>
        <P>
          <TitleSmall>滚动条组成结构图如下：</TitleSmall>
          <img
            src={require('./assets/scrollbar_intro.png')}
            alt=""
            style={{ display: 'block' }}
          />
        </P>
        <P>
          <TitleSmall style={{ marginBottom: 16 }}>使用实例：</TitleSmall>
          <Row gutter={16}>
            <Col span={3}>
              <div className={`${styles.scrollbar_normal}`}>
                <div className={styles.scrollbar_content}>普通</div>
              </div>
            </Col>
            <Col span={3}>
              <div
                className={`${styles.scrollbar_normal} ${styles.scrollbar_1}`}
              >
                <div className={styles.scrollbar_content}>乱试</div>
              </div>
            </Col>
            <Col span={3}>
              <div
                className={`${styles.scrollbar_normal} ${styles.scrollbar_2}`}
              >
                <div className={styles.scrollbar_content}>项目常用</div>
              </div>
            </Col>
          </Row>
        </P>
      </Section>
      <Section
        title={getMenuItem(SCROLLBAR_MENU, 'animation').title}
        level={1}
        id={'animation'}
        className={styles.title_animation}
      >
        <Section
          title={getMenuItem(SCROLLBAR_MENU, 'scrollIntoView').title}
          level={1}
          id={'scrollIntoView'}
          className={styles.title_scrollIntoView}
        >
          <Prompt>平滑属性不兼容IE,具体见参考文献</Prompt>
          <p>阿西吧，我的80谷歌还是不兼容？？？？</p>
        </Section>
        <Section
          title={getMenuItem(SCROLLBAR_MENU, 'behavior').title}
          level={1}
          id={'behavior'}
          className={styles.title_behavior}
        >
          <Prompt>IE、Safari不兼容</Prompt>
          <p>
            在html标签添加 <CodeSpan>scroll-behavior: smooth;</CodeSpan>
            ，很好使！
          </p>
        </Section>
      </Section>
    </div>
  );
}
