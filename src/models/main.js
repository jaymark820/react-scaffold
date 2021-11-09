import { getBoxList } from '../services/api';

export default {
  namespace: 'main',
  state: {
    aaa: 'majie',
    boxList: []
  },
  reducers: {
    // 获取盲盒
    getBoxList: async ({ payload, callback }, { put }) => {
      const response = await getBoxList(payload);
      const list =
        response.code === 0 && response.data.recommend
          ? response.data.recommend
          : [];

      put({ boxList: list });
      if (callback) {
        callback(list);
      }
    },
    removeAll: ({ payload }, { put }) => put({ boxList: [] })
  }
};
