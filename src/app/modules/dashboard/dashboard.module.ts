import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    HeroDetailComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
    
  ],
  providers:[
  ]
})
export class DashboardModule { }
