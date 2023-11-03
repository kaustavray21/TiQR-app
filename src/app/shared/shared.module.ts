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
import { EventDetailsComponent } from './event-details/event-details.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubDetailsComponent } from './club-details/club-details.component';

@NgModule({
	declarations: [RegisterComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, EventsComponent, PageNotFoundComponent, EventDetailsComponent, ClubsComponent, ClubDetailsComponent],
	imports: [CommonModule, AppRoutingModule, RouterModule],
	exports: [RegisterComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, EventsComponent, PageNotFoundComponent, EventDetailsComponent, ClubsComponent, ClubDetailsComponent],
})
export class SharedModule {}
