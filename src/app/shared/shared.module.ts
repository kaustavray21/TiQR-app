import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [RegisterComponent, LoginComponent],
	imports: [CommonModule, AppRoutingModule, RouterModule],
	exports: [RegisterComponent, LoginComponent],
})
export class SharedModule {}
