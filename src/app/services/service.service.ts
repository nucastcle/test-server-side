import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) {}

  callApi(data = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        let headers = new HttpHeaders();
        let params = new HttpParams();
        headers = headers.append('Content-Type', 'application/json; charset=utf-8');
        if (sessionStorage.getItem('accessToken')) {
          headers = headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('accessToken'));
        } else {
          headers = headers.append('Authorization', '');
        }
        headers = headers.append('Access-Control-Allow-Origin', '*')
        params = params.append('', '');
        const requestOptions = {
          headers,
          params,
        };
        const response: any = await this.http.get('https://jsonplaceholder.typicode.com/posts', requestOptions).toPromise();
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
  callApiIP(data = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const response: any = await this.http.get('https://api.ipify.org/?format=json').toPromise();
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}
