import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dashboardComponent } from './dashboard.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: dashboardComponent }

	])],
	exports: [RouterModule]
})
export class dashboardRoutingModule { }
