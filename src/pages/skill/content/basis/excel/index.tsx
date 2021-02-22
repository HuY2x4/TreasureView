import React from 'react';
import { CodeSpan, Span, Section, Prompt } from '@/pages/skill/components';
import { SITE } from '@/pages/skill/components/Reference';
import { MENU_ITEM, getMenuItem } from '@/pages/skill/components/Anchor';
import styles from './index.less';

import * as XLSX from 'xlsx';

export const XLSX_MENU: Array<MENU_ITEM> = [
  {
    title: 'js-xlsx',
    id: 'xlsx',
  },
];
export const XLSX_REFERENCE: Array<SITE> = [
  {
    title: '前端导出excel（安装xlsx）',
    url: 'https://www.cnblogs.com/imbacool/p/12606773.html',
    date: '2020/3/31',
    website: '博客园',
  },
  {
    title: 'sheetjs',
    url: 'https://github.com/SheetJS/sheetjs',
    date: '2020/12/15',
    website: 'Github',
  },
  {
    title: 'SheetJS/js-xlsx修改表头json_to_sheet修改表头',
    url: 'https://blog.csdn.net/qq_37027371/article/details/106022855',
    date: '2020/5/9',
    website: 'CSDN',
  },
];
interface Props {}

export default function (props: Props) {
  const generateXLSX_aoa = () => {
    const arr = [
      ['序号', '姓名', '年纪'],
      ['0', '阿巴阿巴', '15'],
      ['1', '12313', '15'],
    ];
    // 将数组转化为标签页
    const ws = XLSX.utils.aoa_to_sheet(arr);
    console.log('标签页-ws:', ws);
    //创建工作簿
    const wb = XLSX.utils.book_new();
    // 将标签页插入到工作薄里
    XLSX.utils.book_append_sheet(wb, ws);
    XLSX.utils.book_append_sheet(wb, ws);
    console.log('工作簿-wb:', wb);
    // 将工作薄导出为excel文件
    XLSX.writeFile(wb, '数组.xlsx');
  };

  const generateXLSX_json = () => {
    const data = [
      { S: 1, h: 2, e: 3, e_1: 4, t: 5, J: 6, id: 7 },
      { S: 2, h: 3, e: 4, e_1: 5, t: 6, J: 7, id: 8 },
    ];

    //展示的顺序，把data中对象的属性按照你想要的顺序排放就可以了，我这里把id移到了第一列展示
    const header = ['id', 'S', 'h', 'e', 'e_1', 't', 'J'];

    const worksheet = XLSX.utils.json_to_sheet(data, { header: header });
    console.log('标签页-worksheet:', worksheet);

    // ------------------------------------ 感觉没啥用
    //将表头放到原始数据里面去，要保证表头在数组的最前面
    const headerDisplay = {
      S: 'S栏',
      h: 'h栏',
      e: 'e栏',
      e_1: 'e_1栏',
      t: 't栏',
      J: 'J栏',
      id: 'id栏',
    };
    const newData = [headerDisplay, ...data];

    //加了一句skipHeader:true，这样就会忽略原来的表头
    var worksheet2 = XLSX.utils.json_to_sheet(newData, {
      header: header,
      skipHeader: true,
    });
    console.log('标签页-worksheet2:', worksheet2);
  };

  return (
    <div>
      <Section
        title={getMenuItem(XLSX_MENU, 'xlsx').title}
        level={1}
        id={'xlsx'}
        className={styles.xlsx}
      >
        <p>
          <CodeSpan>XLSX.readFile(url)</CodeSpan>
          <Span>读取</Span>
        </p>
        <p>
          <CodeSpan>XLSX.utils.sheet_to_csv</CodeSpan>
          <CodeSpan>XLSX.utils.sheet_to_txt</CodeSpan>
          <CodeSpan>XLSX.utils.sheet_to_html</CodeSpan>
          <CodeSpan>XLSX.utils.sheet_to_json</CodeSpan>
          <CodeSpan>XLSX.utils.sheet_to_formulae</CodeSpan>
        </p>
        <p>
          <CodeSpan>XLSX.writeFile(workbook, 'out.xlsx');</CodeSpan>
          <Span>导出</Span>
        </p>

        <button onClick={generateXLSX_aoa}>
          aoa_to_sheet导出Excel-并可在控制台查看数据
        </button>
        <button onClick={generateXLSX_json}>
          json_to_sheet导出Excel-在控制台查看数据
        </button>
      </Section>
    </div>
  );
}
