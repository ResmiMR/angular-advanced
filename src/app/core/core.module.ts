import { NgModule } from '@angular/core';
import { InmemorydbService } from './services/inmemorydb.service';
import { EmployeeService } from './services/employee.service';
import { AuthService } from './services/auth.service';



@NgModule({
  providers:[
    EmployeeService,
    InmemorydbService,
    AuthService
  ]
})
export class CoreModule { }
