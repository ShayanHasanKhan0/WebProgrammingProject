import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/services/schedule.service';

@Component({
  selector: 'app-viewallcustomers',
  templateUrl: './viewallcustomers.component.html',
  styleUrls: ['./viewallcustomers.component.css']
})
export class ViewallcustomersComponent implements OnInit {


  toggle;//remove
  loaded=true;

  p: number = 1;

  responses = [];

  cust_id

  constructor(private schedules: ScheduleService) { 
    // this.cust_id = localStorage.getItem('c_id');
    schedules.getcustomers(this.cust_id).subscribe((val)=>{
      this.responses = val;
      console.log(this.responses)
    });
  }

  ngOnInit(): void {
  }


}
