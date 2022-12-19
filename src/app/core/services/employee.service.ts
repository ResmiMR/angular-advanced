import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private API_URL:string = 'api/employees';

  constructor(private http:HttpClient) { }


  public getList() 
  {
    return this.http.get<Employee[]>(this.API_URL);
   // return this.http.get<Employee[]>(this.API_URL);
  }

  public getListByName(name: string,) {
    let params = new HttpParams();
    params = params.set('firstName', name);
    return this.http.get<Employee[]>(this.API_URL, { params: params });
  }

  public insertData(employee: Employee) {
    return this.http.post<Employee>(this.API_URL, employee);
  }

  public updateData(employee: Employee) {
    return this.http.put(this.API_URL+ employee.id, employee);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.API_URL + id);
  }
}
