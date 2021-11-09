import create from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import * as models from '../models';

// model列表
const MODEL_LIST = Object.keys(models)
  .map((m) => models[m])
  .filter((m) => m.namespace);

export const useSelector = create(
  devtools(
    subscribeWithSelector((set, get) => {
      // 合并models里的state和reducers，state以namespace为key，reducers格式为namespace/reducerName
      const { state, reducers } = MODEL_LIST.reduce(
        (pre, cur) => {
          const newReducers = {};

          Object.keys(cur.reducers).forEach((reducerName) => {
            newReducers[`${cur.namespace}/${reducerName}`] =
              cur.reducers[reducerName];
          });

          return {
            ...pre,
            state: {
              ...pre.state,
              [cur.namespace]: { ...cur.state }
            },
            reducers: {
              ...pre.reducers,
              ...newReducers
            }
          };
        },
        { state: {}, reducers: {} }
      );

      // 构建dispatch方法，分发action到reducers
      return {
        ...state,
        dispatch: async ({ type, payload, callback }) => {
          if (reducers[type]) {
            const namespace = type.split('/')[0];

            await reducers[type](
              { payload, callback },
              {
                put: (newState = {}) => {
                  const curState = get();

                  set({
                    [namespace]: {
                      ...curState[namespace],
                      ...newState
                    }
                  });
                }
              }
            );
          }
        }
      };
    }),
    'BlindBoxStore'
  )
);

// 获取dispatch
export const useDispatch = () => {
  const dispatch = useSelector((store) => store.dispatch);

  return dispatch;
};

// 监听数据改变
export const useSubscribe = (...args) => {
  const unsubscribe = useSelector.subscribe(...args);

  // 返回解除监听方法
  return unsubscribe;
};
