import request from '../utils/request';

// 获取盲盒列表
export async function getBoxList() {
  return request('/wgapi/vod/front/hover/getDropMenuInfo');
}

// 背包列表
export async function getBagList() {
  return request('/wgapi/vod/front/hover/getDropMenuInfo');
}

// for post request
export async function test(params) {
  return request('/api/test', params, { method: 'post' });
}
