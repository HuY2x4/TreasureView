import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import MyHeader from './Header';
import MyFooter from './Footer';

const { Header, Content, Footer } = Layout;
interface Props {}

export default function BasicLayout(props: Props) {
  return (
    <Layout>
      <MyHeader />
      <Content>{props.children}</Content>
      <MyFooter />
    </Layout>
  );
}
