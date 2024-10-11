import { NgxPaginationModule } from 'ngx-pagination';
import { ExclusivemoduleModule } from './exclusivemodule/exclusivemodule.module';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewschedulesComponent } from './maincomponents/viewschedules/viewschedules.component';
import { AddtrainComponent } from './maincomponents/addtrain/addtrain.component';
import { AddscheduleComponent } from './maincomponents/addschedule/addschedule.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookscheduleComponent } from './maincomponents/bookschedule/bookschedule.component';
import { SigninadminComponent } from './auth/signinadmin/signinadmin.component';
import { ViewtrainsComponent } from './maincomponents/viewtrains/viewtrains.component';
import { ViewbookedticketsComponent } from './maincomponents/viewbookedtickets/viewbookedtickets.component';
import { ViewticketdetailComponent } from './maincomponents/viewticketdetail/viewticketdetail.component';
import { ViewallcustomersComponent } from './maincomponents/viewallcustomers/viewallcustomers.component';
import { EarningsComponent } from './maincomponents/earnings/earnings.component';
import { RemovetrainComponent } from './maincomponents/removetrain/removetrain.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    ViewschedulesComponent,
    AddtrainComponent,
    AddscheduleComponent,
    BookscheduleComponent,
    SigninadminComponent,
    ViewtrainsComponent,
    ViewbookedticketsComponent,
    ViewticketdetailComponent,
    ViewallcustomersComponent,
    EarningsComponent,
    RemovetrainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ExclusivemoduleModule,
    NgxPaginationModule,
    // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
