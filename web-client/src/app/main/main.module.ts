import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms'
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [HomePageComponent, LoginPageComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule
  ]
})
export class MainModule { }
