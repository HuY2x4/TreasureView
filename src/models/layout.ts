import { Effect, Model } from 'dva';
export const PAGE_ROUTE: any = {
  film: '/',
  components: '/components',
  new: '/new',
};
const layoutModel: Model = {
  namespace: 'layout',
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
        // 待优化 - 看的乱
        if (!!pathname) {
          let cur_page = 'film';
          if (pathname !== '/') {
            Object.keys(PAGE_ROUTE).find((key) => {
              cur_page = 'notFound';
              if (
                PAGE_ROUTE[key] !== '/' &&
                pathname.startsWith(PAGE_ROUTE[key])
              ) {
                cur_page = key;
                return true;
              }
            });
          }
          dispatch({
            type: 'save',
            payload: { curPage: cur_page },
          });
        }
      });
    },
  },
};
export default layoutModel;
