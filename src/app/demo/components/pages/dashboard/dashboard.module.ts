import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart'
import {dashboardRoutingModule} from "./dashboard-routing.module";
import {dashboardComponent} from "./dashboard.component";


@NgModule({
    imports: [
        CommonModule,
        dashboardRoutingModule,
        ChartModule
    ],
    declarations: [dashboardComponent]
})
export class dashboardModule { }
