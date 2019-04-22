import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { api as apiConst } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  test() {
    return this.http.get(apiConst.TEST_WEBSTAT_URL);
  }

  get(start,end) {
    return this.http.get(apiConst.HOST + apiConst.WEB_URL + start + '/'+end);
  }
}