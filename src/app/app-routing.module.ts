import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  {path:'',component:FirstPageComponent,pathMatch:'full'},
  {path:'login',loadChildren: () => import('./modules/authentication-routing/authentication-routing-routing.module').then(m => m.AuthenticationRoutingRoutingModule)},
  {path:'user-dashboard',loadChildren: () => import('./modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)},
  {path:'admin-dashboard',loadChildren: () => import('./modules/admin-dashboard/admin-dashboard-routing.module').then(m => m.AdminDashboardRoutingModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
