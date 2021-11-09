import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../../store';
import './index.less';

export default () => {
  const bagList = useSelector(({ bag }) => bag.bagList);
  const dispatch = useDispatch();

  console.log('===>bagList', bagList);

  useEffect(() => {
    dispatch({
      type: 'bag/getBagList',
      payload: {}
    });
  }, []);

  return <div className="BlindBox-bags">我的背包</div>;
};
