import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/services/schedule.service';

@Component({
  selector: 'app-removetrain',
  templateUrl: './removetrain.component.html',
  styleUrls: ['./removetrain.component.css']
})
export class RemovetrainComponent implements OnInit {

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
  removetrain(a:any) {
    this.schedules.removetrain(a.form.value).subscribe((msg)=>{
      this.prompt = "train removed successfully!";
    },(err)=> {
      this.msg = "coudnt add schedule due to an unknown error!";
    })
  }
}
