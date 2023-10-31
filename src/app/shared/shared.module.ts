import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
	declarations: [RegisterComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, EventsComponent, PageNotFoundComponent],
	imports: [CommonModule, AppRoutingModule, RouterModule],
	exports: [RegisterComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, EventsComponent, PageNotFoundComponent],
})
export class SharedModule {}
