import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login.component';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import {ApprovedComponent} from './home/approved/approved.component';
import {RejectedComponent} from './home/rejected/rejected.component';
import {ResolvedComponent} from './home/resolved/resolved.component';
import {PendingComponent} from './home/pending/pending.component';
import { AuthGuard } from './core/authguard.guard';





const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponentComponent},
  {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'aproved', component:ApprovedComponent, canActivate: [AuthGuard]},
  {path:'Rejected', component:RejectedComponent, canActivate: [AuthGuard]},
  {path:'resolved', component:ResolvedComponent, canActivate: [AuthGuard]},
  {path:'Pending', component:PendingComponent, canActivate: [AuthGuard]},

  {path:'registerhere', component:RegistrationComponent}



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
