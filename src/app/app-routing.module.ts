import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {SignupComponent } from './signup/signup.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';

const routes: Routes = [
  {
    path:'', component: EmployeetableComponent,
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'login', component: LoginComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

