import { HttpResponse } from '@angular/common/http';

type AdapterFunction = (data: any, device?: string) => any;

export class HttpAdapter {
  static baseAdapter(res: HttpResponse<object>, adapterFn?: AdapterFunction, device?: string): any {
    if (res.status === 200) {
      try {
        const jsonRes = res.body;
        return adapterFn ? adapterFn.call(undefined, jsonRes, device) : jsonRes;
      } catch (e) {
        return res;
      }
    }
  }
}
