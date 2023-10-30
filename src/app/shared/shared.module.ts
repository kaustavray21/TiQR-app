import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [RegisterComponent],
	imports: [CommonModule, AppRoutingModule, RouterModule],
	exports: [RegisterComponent],
})
export class SharedModule {}
