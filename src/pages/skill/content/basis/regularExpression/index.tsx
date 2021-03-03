import React from 'react';
import {
  CodeSpan,
  Span,
  Section,
  Prompt,
  CodeBlock,
  TitleSmall,
} from '@/pages/skill/components';
import { SITE } from '@/pages/skill/components/Reference';
import { MENU_ITEM, getMenuItem } from '@/pages/skill/components/Anchor';
import styles from './index.less';
export const REGULAR_MENU: Array<MENU_ITEM> = [
  {
    title: '基础知识',
    id: 'basic',
    childs: [
      {
        title: '正则表达式的创建方式',
        id: 'create',
      },
      {
        title: '常用元字符意义',
        id: 'items',
      },
      {
        title: '注意点',
        id: 'notes',
      },
      {
        title: '优先级',
        id: 'priority',
      },
    ],
  },
  {
    title: '常用正则表达式',
    id: 'common',
  },
];
export const REGULAR_REFERENCE: Array<SITE> = [
  {
    title: 'js中正则表达式使用',
    url: 'https://www.cnblogs.com/lnlvinso/p/10467941.html',
    date: '2019/3/3',
    website: '博客园',
  },
  {
    title: '正则表达式测试工具-regex101',
    url: 'https://regex101.com/',
    date: 'unknow',
    website: '工具',
  },
  {
    title: 'js 常用js正则表达式大全',
    url: 'https://www.cnblogs.com/wanguofeng/p/10730766.html',
    date: '2019/4/18',
    website: '博客园',
  },
];
interface Props {}

export default function (props: Props) {
  return (
    <div>
      <Section
        title={getMenuItem(REGULAR_MENU, 'basic').title}
        level={1}
        id={'basic'}
        className={styles.title_basic}
      >
        <Section
          title={getMenuItem(REGULAR_MENU, 'create').title}
          level={2}
          id={'create'}
          className={styles.title_create}
        >
          <CodeBlock type="js">
            {`
                      // 字面量创建方式
                      var reg = /pattern/flags
                      //实例创建方式
                      var reg = new RegExp(pattern,flags);

                      区别：
                      实例创建可以字符串拼接，但需要转义

                      //使用方法
                      var str = '1223334444';
                      var reg = /\d{2}/g;
                      var res = str.match(reg);

                      var str ='  我是空格君  ';
                      var reg = /^\s+|\s+$/g; //匹配开头结尾空格
                      var res = str.replace(reg,'');

                      var str = 'abc';
                      var reg = /\w+/;
                      console.log(reg.test(str));  //true

                      var str = 'abc123cba456aaa789';
                      var reg = /\d+/;
                      console.log(reg.exec(str))
                      //  ["123", index: 3, input: "abc123cba456aaa789"];
                      console.log(reg.lastIndex)
                      // lastIndex : 0 
                      lastIndex ：这个属性记录的就是下一次捕获从哪个索引开始。支持人为赋值
                      
                      pattern:正则表达式  
                      flags:标识(修饰符)
                      标识主要包括：
                      1. i 忽略大小写匹配
                      2. m 多行匹配，即在到达一行文本末尾时还会继续寻常下一行中是否与正则匹配的项
                      3. g 全局匹配 模式应用于所有字符串，而非在找到第一个匹配项时停止

                     
                    `}
          </CodeBlock>
        </Section>
        <Section
          title={getMenuItem(REGULAR_MENU, 'items').title}
          level={2}
          id={'items'}
          className={styles.title_items}
        >
          <TitleSmall>代表特殊含义的元字符</TitleSmall>
          <CodeBlock type="js">
            {`
                      \\d : 0-9之间的任意一个数字  \\d只占一个位置
                      \\w : 数字，字母 ，下划线 0-9 a-z A-Z _
                      \\s : 空格或者空白等
                      \\D : 除了\\d
                      \\W : 除了\\w
                      \\S : 除了\\s
                       . : 除了\\n之外的任意一个字符
                       \\ : 转义字符
                       | : 或者
                      () : 分组
                      \\n : 匹配换行符
                      \\b : 匹配边界 字符串的开头和结尾 空格的两边都是边界 => 不占用字符串位数
                       ^ : 限定开始位置 => 本身不占位置
                       $ : 限定结束位置 => 本身不占位置
                      [a-z] : 任意字母 []中的表示任意一个都可以
                      [^a-z] : 非字母 []中^代表除了
                      [abc] : abc三个字母中的任何一个 [^abc]除了这三个字母中的任何一个字符
                    `}
          </CodeBlock>
          <TitleSmall>代表次数的量词元字符</TitleSmall>
          <CodeBlock type="js">
            {`
                      * : 0到多个
                      + : 1到多个
                      ? : 0次或1次 可有可无
                      {n} : 正好n次；
                      {n,} : n到多次
                      {n,m} : n次到m次
                    `}
          </CodeBlock>
        </Section>
        <Section
          title={getMenuItem(REGULAR_MENU, 'notes').title}
          level={2}
          id={'notes'}
          className={styles.title_notes}
        >
          <TitleSmall>[]中，不会出现两位数</TitleSmall>
          <CodeBlock type="js">
            {`
                        [12]表示1或者2 不过[0-9]这样的表示0到9 [a-z]表示a到z
                        例如:匹配从18到65年龄段所有的人
                        var reg = /[18-65]/; // 这样写对么
                        reg.test('50')
                            //Uncaught SyntaxError: Invalid regular expression: /[18-65]/: Range out of order in character class
                        //聪明的你想可能是8-6这里不对，于是改成[16-85]似乎可以匹配16到85的年龄段的，但实际上发现这也是不靠谱的
                        
                        实际上我们匹配这个18-65年龄段的正则我们要拆开来匹配
                        我们拆成3部分来匹配 18-19  20-59 60-65 
                        reg = /(18|19)|([2-5]\d)|(6[0-5])/;                
                        `}
          </CodeBlock>
          <TitleSmall>
            当我们加()只是为了提高优先级而不想捕获小分组时，可以在()中加?:来取消分组的捕获
          </TitleSmall>
          <CodeBlock type="js">
            {`
                        var str = 'aaabbb';
                        var reg = /(a+)(?:b+)/;
                        var res =reg.exec(str);
                        console.log(res)
                        //["aaabbb", "aaa", index: 0, input: "aaabbb"]
                        //只捕获第一个小分组的内容
                        `}
          </CodeBlock>
        </Section>
        <Section
          title={getMenuItem(REGULAR_MENU, 'priority').title}
          level={2}
          id={'priority'}
          className={styles.title_priority}
        >
          <CodeBlock type="js">
            {`
                        下面是常见的运算符的优先级排列
                        依次从最高到最低说明各种正则表达式运算符的优先级顺序：
                        
                        \ : 转义符
                        (), (?:), (?=), []  => 圆括号和方括号
                        *, +, ?, {n}, {n,}, {n,m}   => 量词限定符
                        ^, $, \任何元字符、任何字符 
                        |       => 替换，"或"操作
                        
                        字符具有高于替换运算符的优先级，一般用 | 的时候，为了提高 | 的优先级，我们常用()来提高优先级
                        如： 匹配 food或者foot的时候 reg = /foo(t|d)/ 这样来匹配
                        `}
          </CodeBlock>
        </Section>
      </Section>
      <Section
        title={getMenuItem(REGULAR_MENU, 'items').title}
        level={2}
        id={'items'}
        className={styles.title_items}
      >
        <CodeBlock type="js">
          {`
                    汉字：^[u4e00-u9fa5]{0,}$
                    英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$
                    中文、英文、数字包括下划线：^[u4E00-u9FA5A-Za-z0-9_]+$
                    Email邮箱地址：^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$
                    url域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
                    手机号码：^1[3|4|5|7|8]d{9}$
                    电话号码：^((d{3,4}-)|d{3.4}-)?d{7,8}$ 
                    国内电话号码(0511-4405222、021-87888822)：d{3}-d{8}|d{4}-d{7}   
                    身份证号：
                        15或18位身份证：^d{15}|d{18}$
                        15位身份证：^[1-9]d{7}((0d)|(1[0-2]))(([0|1|2]d)|3[0-1])d{3}$
                        18位身份证：^[1-9]d{5}[1-9]d{3}((0d)|(1[0-2]))(([0|1|2]d)|3[0-1])d{4}$
                        8 短身份证号码(数字、字母x结尾)：^([0-9]){7,18}(x|X)?$
                    帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：
                        ^[a-zA-Z][a-zA-Z0-9_]{4,15}$
                    密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
                        ^[a-zA-Z]w{5,17}$
                    强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：
                        ^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$  
                    日期格式：^d{4}-d{1,2}-d{1,2}
                    IP地址：d+.d+.d+.d+
                    腾讯QQ号：[1-9][0-9]{4,}    (腾讯QQ号从10000开始)
                    匹配空行：^(s*)
                    空白行的正则表达式： s*    (可以用来删除空白行)
                    中国邮政编码：[1-9]d{5}(?!d)    (中国邮政编码为6位数字)
                    `}
        </CodeBlock>
      </Section>
    </div>
  );
}
