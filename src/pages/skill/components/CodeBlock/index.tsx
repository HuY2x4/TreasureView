import React, { useEffect } from 'react';
import { clearPreBlock } from '@/utils/dataDeal';
import styles from './index.less';
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
import 'codemirror/mode/markdown/markdown';

//ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/anyword-hint.js';
//代码高亮
import 'codemirror/addon/selection/active-line';

/**
 * #react-codemirror2
 * #https://github.com/scniro/react-codemirror2
 */
interface Props {
  type?: 'html' | 'css' | 'json' | 'js' | 'markdown';
  children?: string;
  onChange?: (editor: any, data: any, value: string) => void;
}

export default function (props: Props) {
  let options = {};

  switch (props.type || 'js') {
    case 'html':
      options = {
        mode: 'text/html',
        theme: 'solarized dark',
        lineNumbers: true,
      };
      break;
    case 'css':
      options = {
        mode: 'css/less',
        theme: 'solarized dark',
        lineNumbers: true,
      };
      break;
    case 'json':
      options = {
        mode: 'application/json',
        theme: 'solarized dark',
        lineNumbers: true,
      };
      break;
    case 'js':
      options = {
        mode: 'text/javascript',
        theme: 'solarized dark',
        lineNumbers: true,
      };
      break;
    case 'markdown':
      options = {
        mode: 'text/x-markdown',
        theme: 'solarized dark',
        lineNumbers: true,
      };
      break;
    default:
      options = {
        mode: 'text/x-markdown',
        theme: 'solarized dark',
        lineNumbers: true,
      };
      break;
  }

  return (
    <div className={styles.autoHeight}>
      <CodeMirror
        value={clearPreBlock(props.children)}
        options={options}
        onChange={props.onChange}
      ></CodeMirror>
    </div>
  );
}
