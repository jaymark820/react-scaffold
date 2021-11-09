/* 
import { httpClient } from '@shark/data';
import { GSON } from '@shark/base';

export default function request(url, params, options = {}) {
    const { method = 'get' } = options || {};

    return new Promise((resolve) => {
        httpClient[method](String, url, params, {
            noCache: true
        }).subscribe((res) => {
            let data = res.data || {};

            if (res.error === 0) {
                if (typeof res.data === 'string') {
                    data = GSON.parse(data) || {};
                }
                resolve({
                    code: 0,
                    data,
                    msg: res.msg
                });
            } else {
                resolve({
                    code: res.error,
                    data: null,
                    msg: res.msg
                });
            }
        });
    });
}
*/
export default function request(url, params, options = {}) {
  const { method = 'get' } = options || {};

  return new Promise((resolve) => {
    resolve({ code: 0, data: [], msg: '' });
  });
}
