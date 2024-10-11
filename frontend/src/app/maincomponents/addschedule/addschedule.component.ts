import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/services/schedule.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {

  // messages
  msg:string;
  avail:boolean;
  prompt:string;

  loading:boolean=false;

  responses = [];

  constructor(private schedules: ScheduleService) { 
    schedules.gettrains().subscribe((val)=>{
      // console.log(val)
      this.responses = val;
    });
  }
  
  change(p3:any){
    // console.log(p3)
  }
  
  ngOnInit(): void {
  }
  addschedule(a:any) {
    // console.log(a.form.value)
    this.schedules.postschedule(a.form.value).subscribe((msg)=>{
      this.prompt = "schedule added successfully!";
    },(err)=> {
      this.msg = "coudnt add schedule due to an unknown error!";
    })
  }
}