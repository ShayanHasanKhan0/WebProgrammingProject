import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  public avail: boolean = false;
  public msg: string = "";
  private baseURL: string = environment.baseUrlBackend;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  gettrains(): Observable<any> {
    return this.http.get(this.baseURL + '/get-trains',
        { 
          headers: new HttpHeaders().append('Content-Type', 'application/json'),
          observe: 'body' 
        })
  }

  removetrain(body): Observable<any> {
    return this.http.post(this.baseURL + "/remove-train", body, {
      observe: 'body',
      headers: this.headers,
    });
  }

  posttrain(body: any) {
    return this.http.post(this.baseURL + "/add-train", body, {
      observe: 'body',
      headers: this.headers,
    });
  } 

  getschedules(): Observable<any> {
    return this.http.get(this.baseURL + '/get-schedules',
        { 
          headers: new HttpHeaders().append('Content-Type', 'application/json'),
          observe: 'body' 
        })
  }

  getbookings(a:any): Observable<any> {
    return this.http.get(this.baseURL + '/get-bookings',
        { 
          params: {
            cust_id: a
          },
          headers: new HttpHeaders().append('Content-Type', 'application/json'),
          observe: 'body' 
        })
  }

  getcustomers(a:any): Observable<any> {
    return this.http.get(this.baseURL + '/get-customers',
        { 
          params: {
            cust_id: a
          },
          headers: new HttpHeaders().append('Content-Type', 'application/json'),
          observe: 'body' 
        })
  }

  getparticularschedule(a:any): Observable<any> {
    return this.http.get(this.baseURL + '/get-particular-schedule',
        {
          params: {
            schedule_id: a
          },
          headers: new HttpHeaders().append('Content-Type', 'application/json'),
          observe: 'body' 
        })
  }

  getparticularticket(a:any): Observable<any> {
    return this.http.get(this.baseURL + '/get-particular-ticket',
        {
          params: {
            booking_id: a
          },
          headers: new HttpHeaders().append('Content-Type', 'application/json'),
          observe: 'body' 
        })
  }

  postschedule(body: any) {
    return this.http.post(this.baseURL + "/add-schedule", body, {
      observe: 'body',
      headers: this.headers,
    });
  }
  
  
  bookschedule(body:any) {
    return this.http.post(this.baseURL + "/book-schedule", body, {
      observe: 'body',
      headers: this.headers,
    });
  }

  cancelticket(body:any) {
    return this.http.post(this.baseURL + "/cancel-booking", body, {
      observe: 'body',
      headers: this.headers,
    });
  }
}
