import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/services/schedule.service';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {

  // messages for forgot password
  msg:string;
  avail:boolean;
  prompt:string;

  loading:boolean=false;

  constructor(private schedules: ScheduleService) { }

  change(p3:any){
    // console.log(p3)
  }
  
  ngOnInit(): void {
  }
  
  addtrain(a:any) {
    var admin_id = localStorage.getItem('admin_id');
    var body = {
      trainname : a.form.value.p1,
      capacity : a.form.value.p2,
      class : a.form.value.p6,
      admin_id_of_creator :  admin_id
    }
    this.schedules.posttrain(body).subscribe((msg)=>{
      this.prompt = "train added successfully!";
    },(err)=> {
      this.msg = "coudnt add schedule due to an unknown error!";
    });
  }
}
