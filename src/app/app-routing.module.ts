import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { EventsComponent } from './shared/events/events.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		component: EventsComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'forgot-password',
		component: ForgotPasswordComponent,
	},
	{
		path: 'reset-password',
		component: ResetPasswordComponent,
	},
	{
		path: 'events',
		component: EventsComponent,
	},
	{
		path: 'events/:id',
		component: EventsComponent,
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
