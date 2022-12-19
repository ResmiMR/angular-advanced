import { NgModule } from '@angular/core';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    AdminDashboardRoutingModule
    
  ]
})
export class AdminDashboardModule { }
