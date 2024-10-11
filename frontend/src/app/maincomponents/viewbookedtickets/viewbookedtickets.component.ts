import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/services/schedule.service';

@Component({
  selector: 'app-viewbookedtickets',
  templateUrl: './viewbookedtickets.component.html',
  styleUrls: ['./viewbookedtickets.component.css']
})
export class ViewbookedticketsComponent implements OnInit {

  toggle;//remove
  loaded=true;

  p: number = 1;

  responses = [];

  cust_id

  constructor(private schedules: ScheduleService) { 
    this.cust_id = localStorage.getItem('customer_id');
    schedules.getbookings(this.cust_id).subscribe((val)=>{
      this.responses = val;
      console.log(this.responses)
    });
  }

  ngOnInit(): void {
  }

}
