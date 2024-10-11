import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signinadmin',
  templateUrl: './signinadmin.component.html',
  styleUrls: ['./signinadmin.component.css']
})
export class SigninadminComponent implements OnInit {

  msg: any = [];
  avail: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmitLogin(f: NgForm) {
    if (!f.valid) {
      this.msg = "Invalid Email or Password";
      this.avail = true;
      return;
    }
    this.authService.loginadmin(
      {
        "email": f.controls.email.value,
        "password": f.controls.p1.value,
      }
    ).subscribe(
      data => {
        // localStorage.setItem('braintreeCusID', data['braintreeCusID']);
        if(data['admin_id']){
          window.localStorage.setItem('admin_id', data['admin_id']);
          console.log("nav")
          this.router.navigate(['/d/admin/addschedule']);
        }
        else if(data['msg']){
          console.log(data['msg'])
          if(data['msg'] === 'Invalid email or Password') {
            this.msg = "Invalid Email or Password";
            this.avail = true;
          }
        }
        return
      },
      error => {
        this.msg = "An error occurred";
        this.avail = true;
      }
    )
  }

  // onSubmitRegister(f: NgForm) {
  //   if (f.controls.p1.value != f.controls.p2.value) {
  //     this.msg = "Password doesn't match";
  //     this.avail = true;
  //     return;
  //   }
  //   if (!f.valid) {
  //     this.msg = "Invalid Form Fields";
  //     this.avail = true;
  //     return;
  //   }
  //   this.authService.registeradmin({
  //     "email": f.controls.email.value,
  //     "password": f.controls.p2.value,
  //   }).subscribe(
  //     data => {
  //       // console.log(data)
  //       // console.log("asdas")
  //       // return
  //       if(data['msg']){
  //         console.log(data['msg'])
  //       }
  //       else{
  //         // this.authService.msg = "successfully registered a user!";
  //         this.onSubmitLogin(f)
  //       }
  //     },
  //     error => {this.router.navigate(['/error']);}
  //   )
  // }

}
