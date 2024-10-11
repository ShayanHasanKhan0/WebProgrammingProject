import { CheckoutComponent } from './../payment/checkout/checkout.component';
import { PaymentComponent } from './../payment/payment/payment.component';
import { EarningsComponent } from './../maincomponents/earnings/earnings.component';
import { ViewallcustomersComponent } from './../maincomponents/viewallcustomers/viewallcustomers.component';
import { ViewticketdetailComponent } from './../maincomponents/viewticketdetail/viewticketdetail.component';
import { ViewtrainsComponent } from './../maincomponents/viewtrains/viewtrains.component';
import { ViewbookedticketsComponent } from './../maincomponents/viewbookedtickets/viewbookedtickets.component';
import { AddscheduleComponent } from './../maincomponents/addschedule/addschedule.component';
import { BookscheduleComponent } from './../maincomponents/bookschedule/bookschedule.component';
import { AddtrainComponent } from './../maincomponents/addtrain/addtrain.component';
// import { HelpComponent } from './../help/help/help.component';
// import { QuizmenuComponent } from './../components/quizmenu/quizmenu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewschedulesComponent } from '../maincomponents/viewschedules/viewschedules.component';
import { RemovetrainComponent } from '../maincomponents/removetrain/removetrain.component';

const routes: Routes = [
  {path:'',redirectTo:'viewschedules', pathMatch:'full'},

  // customer
  {path:"viewschedules", component:ViewschedulesComponent},
  
  {path:"bookschedule/:id", component:BookscheduleComponent},

  {path:"bookedtickets", component:ViewbookedticketsComponent},

  {path:"ticketdetail/:id", component:ViewticketdetailComponent},

  {path:"alltrains", component:ViewtrainsComponent},

    // payment
    {path:"dp",loadChildren:()=>import('../payment/payment.module').then(mod=>mod.PaymentModule)},

  // admin
  {path:"admin/viewcustomers", component:ViewallcustomersComponent},

  {path:"admin/addtrain", component:AddtrainComponent},

  {path:"admin/removetrain", component:RemovetrainComponent},

  {path:"admin/addschedule", component:AddscheduleComponent},
  
  {path:"admin/earningsreport", component:EarningsComponent},

  // userprofile
  // {path:"du",loadChildren:()=>import('../userprofile/userprofile.module').then(mod=>mod.UserprofileModule)},
  // // payment
  {path:"dp",loadChildren:()=>import('../payment/payment.module').then(mod=>mod.PaymentModule)},
  // // statistics
  // {path:"ds",loadChildren:()=>import('../statistics/statistics.module').then(mod=>mod.StatisticsModule)},
  // // quiz menu
  // {path:"quizmenu", component:QuizmenuComponent},
  // // help
  // {path:"help", component:HelpComponent},
  // // form create
  // {path:"df",loadChildren:()=>import('../form/form.module').then(mod=>mod.FormModule)},
  // // form edit
  // {path:"dfe",loadChildren:()=>import('../editform/editform.module').then(mod=>mod.EditformModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashlayoutRoutingModule { }
