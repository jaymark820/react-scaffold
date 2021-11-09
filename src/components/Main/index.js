import React, { useEffect } from 'react';
import { useSelector, useDispatch, useSubscribe } from '../../store';
import DrawBtn from '../DrawBtn';
import BoxList from '../BoxList';
import FloatArea from '../FloatArea';
import Bags from '../Bags';
import Rules from '../Rules';
import './index.less';

export default () => {
  const boxList = useSelector(({ main }) => main.boxList);
  const dispatch = useDispatch();

  console.log('===>boxList', boxList);

  useEffect(() => {
    dispatch({
      type: 'main/getBoxList',
      payload: {
        boxId: 123
      },
      callback: (res) => {
        console.log('===>res', res);
      }
    });

    // 监听store内某个数据变化示例
    const unSub = useSubscribe(
      ({ main }) => main.boxList,
      (data, prevData) => {
        console.log('===>subscription:', data, prevData);
      }
    );

    return () => {
      unSub();
    };
  }, [dispatch]);

  return (
    <div className="BlindBox-Main">
      <Bags />
      <Rules />
      <div className="BlindBox-Bottom">
        <FloatArea />
        <BoxList />
        <DrawBtn />
      </div>
    </div>
  );
};
