import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'rashmi',20000,"JAVA"),
   new Employee(1,'sona',60000,"Angular"),
   new Employee(5,'aastha',90000,"Js"),
   new Employee(4,'aishwarya',30000,"Java"),
   new Employee(3,'sharmila',80000,"Angular")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}