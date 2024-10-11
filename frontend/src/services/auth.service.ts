import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public avail: boolean = false;
  public msg: string = "";
  private baseURL: string = environment.baseUrlBackend;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  register(body: any) {
    return this.http.post(this.baseURL + "/register", body, {
      observe: 'body',
      headers: this.headers,
    });
  }

  login(body: any) {
    console.log(body)
    return this.http.post(this.baseURL + "/login", body, {
      observe: 'body',
      headers: this.headers
    });
  }

  loginadmin(body: any) {
    return this.http.post(this.baseURL + "/login-admin", body, {
      observe: 'body',
      headers: this.headers,
    });
  }

  logout(){
    let result = new Promise(
      async (resolve, reject)=>{
        await this.http.post(
          this.baseURL +  "/logout",
          {},
          {
            observe: 'body',
            headers: this.headers,
          }
        ).toPromise().then(
          resolve
        )
      }
    )
    return result
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
