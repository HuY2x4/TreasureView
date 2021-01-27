import { Effect, Model } from 'dva';
export const PAGE_ROUTE: any = {
  film: '/',
  comp: '/components',
  new: '/new',
};
const layoutModel: Model = {
  namespace: 'index',
  state: {
    curPage: 'film',
  },
  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    // 初始化路由信息
    initRoute({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // 待优化 - PAGE_ROUTE的value重复会有问题
        let cur_page = PAGE_ROUTE[0];
        Object.keys(PAGE_ROUTE).forEach((key) => {
          if (PAGE_ROUTE[key] === '/') {
            cur_page = pathname === PAGE_ROUTE[key] ? key : cur_page;
          } else if (pathname.startsWith(PAGE_ROUTE[key])) {
            cur_page = PAGE_ROUTE[key];
          } else {
            cur_page = '404';
          }
        });
      });
    },
  },
};
export default layoutModel;
