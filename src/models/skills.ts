import { Effect, Model } from 'dva';

const layoutModel: Model = {
  namespace: 'skills',
  state: {
    curType: 'font',
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
  },
  subscriptions: {
    // 初始化路由信息
    initRoute({ dispatch, history }) {
      return history.listen((location: any) => {
        dispatch({
          type: 'save',
          payload: { curPage: location.query?.type || 'font' },
        });
      });
    },
  },
};
export default layoutModel;
