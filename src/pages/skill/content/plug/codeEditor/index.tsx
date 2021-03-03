import React from 'react';
import { CodeSpan, Span, Section, Prompt } from '@/pages/skill/components';
import { SITE } from '@/pages/skill/components/Reference';
import { MENU_ITEM, getMenuItem } from '@/pages/skill/components/Anchor';
import styles from './index.less';
import { Row, Col } from 'antd';
import { clearPreBlock } from '@/utils/dataDeal';
// CodeMirror2
// 必须引入
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css';
// 主题风格
import 'codemirror/theme/solarized.css';
// 代码模式，clike是包含java,c++等模式的
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
//ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/anyword-hint.js';
//代码高亮
import 'codemirror/addon/selection/active-line';

export const CODE_EDITOR_MENU: Array<MENU_ITEM> = [
  {
    title: 'react-codemirror2',
    id: 'codemirror2',
  },
];
export const CODE_EDITOR_REFERENCE: Array<SITE> = [
  {
    title: 'react-codemirror2',
    url: 'https://github.com/scniro/react-codemirror2',
    date: '2020/8/7',
    website: 'Github',
  },
  {
    title: 'codemirror mode',
    url: 'https://codemirror.net/mode/index.html',
    date: 'unknown',
    website: '官网',
  },
  {
    title: 'codemirror config',
    url: 'https://codemirror.net/doc/manual.html#config',
    date: 'unknown',
    website: '官网',
  },
  {
    title: 'codemirror theme效果',
    url: 'https://blog.csdn.net/qq_41694291/article/details/106429772',
    date: '2020/5/29',
    website: 'CSDN',
  },
];
interface Props {}

export default function (props: Props) {
  return (
    <div>
      <Section
        title={getMenuItem(CODE_EDITOR_MENU, 'codemirror2').title}
        level={1}
        id={'codemirror2'}
        className={styles.codemirror2}
      >
        <Row gutter={20}>
          <Col span={12}>
            <CodeSpan>html</CodeSpan>
            <Prompt style={{ marginLeft: 15 }}>
              部分主题色无法正常兼容展示语言应用的高亮颜色
            </Prompt>
            <CodeMirror
              value={clearPreBlock(`
                                <html style="color: green">
                                <!-- this is a comment -->
                                <head>
                                    <title>HTML Example</title>
                                </head>
                                <body>
                                    The indentation tries to be <em>somewhat &quot;do what
                                    I mean&quot;</em>... but might not match your style.
                                </body>
                                </html>
                            `)}
              options={{
                mode: 'text/html',
                theme: 'solarized dark',
                lineNumbers: true,
              }}
              onChange={(...e) => {
                console.log('e:', e);
              }}
            />
          </Col>
          <Col span={12}>
            <CodeSpan>js</CodeSpan>
            <CodeMirror
              value={clearPreBlock(`
                                const a = 'jjjj';
                                let b = a + 2222;
                            `)}
              options={{
                mode: 'text/javascript',
                theme: 'solarized dark',
                lineNumbers: true,
              }}
            />
          </Col>
          <Col span={12}>
            <CodeSpan>less</CodeSpan>
            <CodeMirror
              value={clearPreBlock(`
                                @media screen and (device-aspect-ratio: 16/9) { … }
                                @media screen and (device-aspect-ratio: 1280/720) { … }
                                @media screen and (device-aspect-ratio: 2560/1440) { … }

                                html:lang(fr-be)

                                tr:nth-child(2n+1) /* represents every odd row of an HTML table */

                                img:nth-of-type(2n+1) { float: right; }
                                img:nth-of-type(2n) { float: left; }

                                body > h2:not(:first-of-type):not(:last-of-type)

                                html|*:not(:link):not(:visited)
                                *|*:not(:hover)
                                p::first-line { text-transform: uppercase }

                                @namespace foo url(http://www.example.com);
                                foo|h1 { color: blue }  /* first rule */
                            `)}
              options={{
                mode: 'css/less',
                theme: 'solarized dark',
                lineNumbers: true,
              }}
            />
          </Col>
          <Col span={12}>
            <CodeSpan>json</CodeSpan>
            <CodeMirror
              value={clearPreBlock(`
                            {
                                a:1,
                                a:1,
                                a:1,
                            }
                            `)}
              options={{
                mode: 'application/json',
                theme: 'solarized dark',
                lineNumbers: true,
              }}
            />
          </Col>
          <Col span={12}>
            <CodeSpan>xml</CodeSpan>
            <CodeMirror
              value={clearPreBlock(`
                                <html style="color: green">
                                <!-- this is a comment -->
                                <head>
                                    <title>HTML Example</title>
                                </head>
                                <body>
                                    The indentation tries to be <em>somewhat &quot;do what
                                    I mean&quot;</em>... but might not match your style.
                                </body>
                                </html>
                            `)}
              options={{
                mode: 'application/xml',
              }}
              onChange={(...e) => {
                console.log('e:', e);
              }}
            />
          </Col>
        </Row>
      </Section>
    </div>
  );
}
