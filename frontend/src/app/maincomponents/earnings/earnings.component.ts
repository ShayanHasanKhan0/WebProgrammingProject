import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { ScheduleService } from 'src/services/schedule.service';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {

  // messages
  msg:string;
  avail:boolean;
  prompt:string;

  loading:boolean=false;

  ticketdetails:any = {};

  responses = {
    custname:null,
    schedule_id:null,
    bookingid:null,
    seats:null
  };

  rendered:boolean=false;
  booked:boolean=false;

  ticket_id;
  // pdfTable: any;

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

  constructor(private schedules: ScheduleService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      this.ticket_id = paramMap.get('id');
    });
    schedules.getparticularticket(this.ticket_id).subscribe((val)=>{
      this.responses = val[0];
      console.log(this.responses)
    });
  }

  change(p3:any){
    // console.log(p3)
  }
  
  ngOnInit(): void {
  }
  
  cancelticket() {
    var cust_id = localStorage.getItem('customer_id');
    var tick_id;
    this.route.paramMap.subscribe(params => {
      tick_id = params.get('id')
    })
    var body = {
      ticket_id:tick_id
    }
    this.schedules.cancelticket(body).subscribe((msg)=>{
      console.log("ticket has been cancelled")
      this.booked = true;
    },(err)=> {
      this.msg = "coudnt cancel due to an unknown error!";
    });
  }



}
