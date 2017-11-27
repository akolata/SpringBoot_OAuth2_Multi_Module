import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  constructor(private _router: Router, private _http: Http){}

  obtainAccessToken(loginData){
    let params = new URLSearchParams();
    params.append('username',loginData.username);
    params.append('password',loginData.password);
    params.append('grant_type','password');
    params.append('client_id','angularClient');

    let headers = new Headers({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic ' + btoa("angularClient:secret")
      });

    let options = new RequestOptions({
      headers: headers
    });

    this._http.post('http://localhost:8081/oauth/token', params.toString(), options)
      .map(res => {
        return res.json();
      })
      .subscribe(
        data => {
          this.saveToken(data['access_token']);
        },
        err => {
          alert('Invalid Credentials');
        });
  }

  saveToken(token){
    localStorage.setItem("access_token", token);
    this._router.navigate(['/']);
  }

  getResource(resourceUrl) : Observable<string>{
    var headers = new Headers(
      {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Bearer '+localStorage.getItem('access_token')
      });
    var options = new RequestOptions({ headers: headers });
    return this._http.get(resourceUrl, options)
      .map((res:Response) => {
       return res.text();
    })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  checkCredentials(){
    if (localStorage.getItem('access_token') == null){
      this._router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    this._router.navigate(['/login']);
  }
}
