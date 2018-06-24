import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './core/authguard.guard';




//components
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login.component';
import { HomeComponent } from './home/home.component';
import { RejectedComponent } from './home/rejected/rejected.component';
import { ApprovedComponent } from './home/approved/approved.component';
import { RegistrationComponent } from './registration/registration.component';
import { PendingComponent } from './home/pending/pending.component';
import { ResolvedComponent } from './home/resolved/resolved.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

// services
import {AuthonticateService} from './core/services/authonticate.service';
import {RegisterService} from './core/services/register.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ApprovedComponent,
    PendingComponent,
    RejectedComponent,
    RegistrationComponent,
    ResolvedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthonticateService, RegisterService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
