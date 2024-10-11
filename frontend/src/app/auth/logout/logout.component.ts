import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _cookieService: CookieService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.logout().then(
    //   data => {
    //     console.log("hitt")

    console.log(this.router.url); 

    if(localStorage.getItem('customer_id')) {
      console.log("cust")
      this.router.navigate(['/signin']);
    } else if(localStorage.getItem('admin_id')) {
      console.log("admin")
      this.router.navigate(['/signin-admin']);
    }
    localStorage.clear();
    //   }
    // )
  }

}
