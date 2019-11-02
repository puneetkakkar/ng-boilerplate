import { HttpResponse } from '@angular/common/http';

export class HttpAdapter {
	static baseAdapter(
		res: HttpResponse<object>,
		adapterFn?: () => void,
		device?: string
	): any {
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
