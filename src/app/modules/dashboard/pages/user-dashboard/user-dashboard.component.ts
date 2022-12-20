import { Component } from '@angular/core';
import { map, Observable, Subject, take, takeUntil } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { interval } from 'rxjs';

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

  observable$!: Observable<number>;

  /**generics** */
  myNumArr = this.getArray<number>([100, 200, 300]);

  myStrArr = this.getArray<string>(["Hello", "World"]);

  genericVal = this.displayType<number, string>(1, "Steve");

  hasData:boolean = false;
  
  ngOnInit(){
   this.observable$ = this.getObservable();

   //calling gerics function
   this.myNumArr.push(2);



  this.empService.getList().pipe(takeUntil(this.destroying$)).subscribe({
    next:(data:Employee[])=>{
    this.empsList = data;
   },
   error:(error)=>{
    console.log(error);
   }
  });
  
}

getObservable() {
  return interval(1000).pipe(
    take(11),
    map(v => v * 2)
  );
}

 getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

 displayType<T, U>(id:T, name:U): void { 
  console.log(typeof(id) + ", " + typeof(name));  
}

  ngOnDestroy(){
    this.destroying$.next(true);
    this.destroying$.complete();
  }

  getDate(num:number,num2:number):number{
     return 1;
  }

}
