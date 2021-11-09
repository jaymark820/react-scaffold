import { getBagList } from '../services/api';

export default {
  namespace: 'bag',
  state: {
    bagList: []
  },
  reducers: {
    // 获取背包列表
    getBagList: async ({ payload }, { put }) => {
      const response = await getBagList();

      put({
        bagList:
          response.code === 0 && response.data.videos
            ? response.data.videos
            : []
      });
    },
    removeAll: ({ payload }, { put }) => put({ bagList: [] })
  }
};
