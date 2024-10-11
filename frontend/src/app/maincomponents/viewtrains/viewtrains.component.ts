import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/services/schedule.service';

@Component({
  selector: 'app-viewtrains',
  templateUrl: './viewtrains.component.html',
  styleUrls: ['./viewtrains.component.css']
})
export class ViewtrainsComponent implements OnInit {
  toggle;//remove
  loaded=true;

  p: number = 1;

  responses = [];

  constructor(private schedules: ScheduleService) { 
    schedules.gettrains().subscribe((val)=>{
      console.log(val)
      this.responses = val;
    });
  }

  ngOnInit(): void {
  }


}
