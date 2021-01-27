import React, { Component } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { PAGE_ROUTE } from '@/models/layout';
import styles from './index.less';

interface Props extends ConnectProps {
  curPage: string;
}

@connect((state) => ({
  curPage: state.layout.curPage,
}))
class Header extends Component<Props> {
  state = {
    barStatus: 'opcatiy', // opcatiy全透明、half半透明、normal实体
  };

  componentDidMount() {
    // 监听滚动条 - 动态改变顶部栏样式
    window.addEventListener('scroll', this.bindHandleScroll);
    // 初始化顶部栏状态
    if (this.props.curPage == 'film') {
      this.setState({ barStatus: 'opcatiy' });
    } else {
      this.setState({ barStatus: 'normal' });
    }
  }
  componentDidUpdate(preProps: Props) {
    // 更新顶部栏状态
    if (preProps.curPage !== this.props.curPage) {
      if (this.props.curPage == 'film') {
        this.setState({ barStatus: 'opcatiy' });
      } else {
        this.setState({ barStatus: 'normal' });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindHandleScroll);
  }

  // 监听滚动条
  bindHandleScroll = (event: any) => {
    // 滚动的高度
    const scrollTop =
      (event.srcElement ? event.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (event.srcElement ? event.srcElement.body.scrollTop : 0);

    const { curPage } = this.props;
    if (['film'].includes(curPage)) {
      if (scrollTop == 0) {
        this.setState({ barStatus: 'opcatiy' });
      } else {
        this.setState({ barStatus: 'half' });
      }
    } else {
      if (scrollTop == 0) {
        this.setState({ barStatus: 'normal' });
      } else {
        this.setState({ barStatus: 'half' });
      }
    }
  };

  // 页面路由跳转
  handleRouter = (next: string) => {
    history.push(next);
  };

  render() {
    const { barStatus } = this.state;
    const { curPage } = this.props;

    // 顶部栏样式映射
    const TOPBAR_STYLES: any = {
      opcatiy: `${styles.topBar_opacity}`,
      half: `${styles.topBar_normal} ${styles.topBar_halfOpac}`,
      normal: `${styles.topBar_normal}`,
    };

    return (
      <>
        <div className={`${styles.topBar} ${TOPBAR_STYLES[barStatus]}`}>
          <div className={styles.logo_wrap}>Treause</div>
          <ul className={styles.pageList}>
            <li
              className={styles.pageList_item}
              onClick={this.handleRouter.bind(this, '/')}
            >
              组件
            </li>
            <li
              className={styles.pageList_item}
              onClick={this.handleRouter.bind(this, '/components')}
            >
              组件2
            </li>
          </ul>
        </div>
        {['film'].includes(curPage) && <div className={styles.topBar_holder} />}
      </>
    );
  }
}
export default Header;
