import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/services/schedule.service';

@Component({
  selector: 'app-viewschedules',
  templateUrl: './viewschedules.component.html',
  styleUrls: ['./viewschedules.component.css']
})
export class ViewschedulesComponent implements OnInit {

  toggle;//remove
  loaded=true;

  p: number = 1;

  responses = [];

  constructor(private schedules: ScheduleService) { 
    schedules.getschedules().subscribe((val)=>{
      console.log(val)
      this.responses = val;
    });
  }

  ngOnInit(): void {
  }

}



