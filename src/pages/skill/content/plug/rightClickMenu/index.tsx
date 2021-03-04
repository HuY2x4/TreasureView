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
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { message } from 'antd';
export const RIGHT_CLICK_MENU: Array<MENU_ITEM> = [
  {
    title: 'react-contextmenu',
    id: 'contextmenu',
  },
];
export const RIGHT_CLICK_REFERENCE: Array<SITE> = [
  {
    title: 'react-contextmenu',
    url: 'https://github.com/vkbansal/react-contextmenu/',
    date: '2020/8/11',
    website: 'Github',
  },
];
interface Props {}

export default function (props: Props) {
  const handleClick = () => {
    message.success('成功点击 +1');
  };

  return (
    <div>
      <Section
        title={getMenuItem(RIGHT_CLICK_MENU, 'contextmenu').title}
        level={1}
        id={'contextmenu'}
        className={styles.title_contextmenu}
      >
        <P>
          <TitleSmall>使用示例</TitleSmall>
          <ContextMenuTrigger id="same_unique_identifier">
            <CodeBlock>
              {`
                            // 在该区域右键点击------------------------------------
                            <ContextMenuTrigger id="same_unique_identifier">
                            <div className="well">Right click to see the menu</div>
                            </ContextMenuTrigger>
                        
                            <ContextMenu id="same_unique_identifier">
                                <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                                ContextMenu Item 1
                                </MenuItem>
                                <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                                ContextMenu Item 2
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                                ContextMenu Item 3
                                </MenuItem>
                            </ContextMenu>
                        `}
            </CodeBlock>
          </ContextMenuTrigger>

          <ContextMenu id="same_unique_identifier" className={styles.menu_wrap}>
            <MenuItem
              data={{ foo: 'bar' }}
              onClick={handleClick}
              className={styles.menu_item}
            >
              ContextMenu Item 1
            </MenuItem>
            <MenuItem
              data={{ foo: 'bar' }}
              onClick={handleClick}
              className={styles.menu_item}
            >
              ContextMenu Item 2
            </MenuItem>
            <MenuItem divider />
            <MenuItem
              data={{ foo: 'bar' }}
              onClick={handleClick}
              className={styles.menu_item}
            >
              ContextMenu Item 3
            </MenuItem>
          </ContextMenu>
        </P>
        <P>
          <TitleSmall>使用体验</TitleSmall>
          <br />
          样式需要自己写，但也还算方便
        </P>
      </Section>
    </div>
  );
}
