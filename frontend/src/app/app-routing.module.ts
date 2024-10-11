import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './auth/logout/logout.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SigninadminComponent } from './auth/signinadmin/signinadmin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashlayoutComponent } from './dashlayout/dashlayout/dashlayout.component';

const routes: Routes = [
  {path:'',redirectTo:'signup', pathMatch:'full'},

  {path:"signup", component:SignupComponent},

  {path:"signin", component:SigninComponent},

  {path:"signin-admin", component:SigninadminComponent},

  {path:"logout", component:LogoutComponent},

  { path: 'd', component: DashlayoutComponent,
  children: [
    {path:"",loadChildren:()=>import('../app/dashlayout/dashlayout.module').then(mod=>mod.DashlayoutModule)}
  ]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
