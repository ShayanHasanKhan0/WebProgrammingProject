import { NgForm } from '@angular/forms';
import { ScheduleService } from 'src/services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookschedule',
  templateUrl: './bookschedule.component.html',
  styleUrls: ['./bookschedule.component.css']
})
export class BookscheduleComponent implements OnInit {

  // messages
  msg:string;
  avail:boolean;
  prompt:string;

  loading:boolean=false;

  ticketdetails:any = {};

  responses = {
      arrival_time:null,
      capacity:null,
      class:null,
      date:null,
      departure_time:null,
      going_from:null,
      going_to:null,
      scheduleid:null,
      seats_booked:null,
      train_id:null,
      trainname:null,
  };

  rendered:boolean=false;
  booked:boolean=false;

  schedule_id;
  pdfTable: any;

  constructor(private schedules: ScheduleService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      this.schedule_id = paramMap.get('id');
    });
    schedules.getparticularschedule(this.schedule_id).subscribe((val)=>{
      this.responses = val[0];
      // console.log(this.responses)
    });
  }

  change(p3:any){
    // console.log(p3)
  }
  
  ngOnInit(): void {
  }
  
  bookschedule(a: NgForm) {
    var cust_id = localStorage.getItem('customer_id');
    var sched_id;
    this.route.paramMap.subscribe(params => {
      sched_id = params.get('id')
    })
    var body = {
      schedule_id : sched_id,
      customer_id : cust_id,
      seats_booked: a.form.value.p2 + this.responses.seats_booked,
      seats: a.form.value.p2
    }
    this.schedules.bookschedule(body).subscribe((msg)=>{
      console.log(msg)
      this.booked = true;
    },(err)=> {
      this.msg = "coudnt add schedule due to an unknown error!";
    });
  }
}
