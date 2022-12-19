import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InmemorydbService implements InMemoryDbService {
  createDb() {
    let employees = [
      { id: 1, firstName: 'Windstorm' ,lastName:"Jacob"},
      { id: 2, firstName: 'Bombasto' ,lastName:"sam"},
      { id: 3, firstName: 'Magneta',lastName:"Oley" },
      { id: 4, firstName: 'Tornado' ,lastName:"Alex"}
    ];
    return {employees};
  }
}
