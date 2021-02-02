import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import MyHeader from './Header';
import MyFooter from './Footer';
import { TOP_MENU } from './Header';

const { Content } = Layout;
interface Props {
  curPage: string;
  children: React.ReactNode;
}

const _connect: any = connect;
@_connect((state: any) => ({
  curPage: state.layout.curPage,
}))
class BasicLayout extends Component<Props> {
  // 判断当前尾部是否显示
  getFooterVisible = () => {
    return TOP_MENU[this.props.curPage]?.footerVisible;
  };
  render() {
    return (
      <Layout>
        <MyHeader />
        <Content>{this.props.children}</Content>
        {this.getFooterVisible() && <MyFooter />}
      </Layout>
    );
  }
}
export default BasicLayout;
