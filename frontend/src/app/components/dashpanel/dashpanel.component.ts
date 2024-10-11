import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashpanel',
  templateUrl: './dashpanel.component.html',
  styleUrls: ['./dashpanel.component.css']
})
export class DashpanelComponent implements OnInit {
  is_cust:boolean = false;
  constructor(private router: Router) { 
    if(this.router.url[3]=='a') {
      this.is_cust = false;
    } else {
      this.is_cust =true;
    };
    console.log(this.is_cust)
  }

  ngOnInit(): void {
  }

}
