import React, { Component } from 'react';
import { connect, withRouter } from 'umi';
import styles from './index.less';
import { MENUS } from '../menu/menu';
import { Reference, Section, Anchor } from '../components';

const _connect: any = connect;
@_connect((state: any) => ({
  curType: state.skills.curType,
}))
class content extends Component<any> {
  state = {
    curAnchor: '',
  };

  componentDidUpdate(preProps: any) {
    // 锚点
    if (preProps.location.hash !== this.props.location.hash) {
      const AnchorNode = document.getElementById(this.props.location.hash);
      console.log('AnchorNode:', AnchorNode, this.props.location.hash);
      if (AnchorNode) {
        AnchorNode.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  }

  // 获取当前type的数据
  getCurTypeNode = () => {
    const allType = MENUS.reduce((list: any, item) => {
      list.push(...item.childs);
      return list;
    }, []);
    return allType.find((val: any) => val.key == this.props.curType) || {};
  };

  render() {
    const pageData = this.getCurTypeNode();
    const { node: Node } = pageData;
    return (
      <div className={styles.wrap}>
        <main className={styles.main}>
          <Section title={pageData.title} level={0}>
            <Node />
          </Section>
          <footer>
            <Reference data={pageData.reference} />
          </footer>
        </main>
        <aside className={styles.aside}>
          <Anchor data={pageData.menu} />
        </aside>
      </div>
    );
  }
}
export default withRouter(content);
