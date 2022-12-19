import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  providers:[AuthService]
})
export class UserDashboardComponent {

  constructor(private authService:AuthService,
    private empService:EmployeeService){}

  employeeList: Employee[]=[
    {id:1,firstName:'john',lastName:'ray'},
    {id:2,firstName:'test',lastName:'user'}
  ]
  usersList : User[] = [
    new User(1,'jaz','jay'),
    new User(1,'test','user'),
  ]
  empsList : Employee[] =[];
  private readonly destroying$ = new Subject<boolean>();

  ngOnInit(){

  this.empService.getList().pipe(takeUntil(this.destroying$)).subscribe({
    next:(data:Employee[])=>{
    this.empsList = data;
   },
   error:(error)=>{
    console.log(error);
   }
  });
}

  ngOnDestroy(){
    this.destroying$.next(true);
    this.destroying$.complete();
  }

}
