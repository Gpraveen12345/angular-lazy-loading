import { Component, OnInit } from '@angular/core';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent  {
public employee: any = [];
public employeColumn: any = [];
  constructor(private employeeDetailsService: EmployeedetailsService) {
    this.employee = employeeDetailsService.employedetails;
    this.employeColumn = Object.keys(this.employee[0]);
  }
public edit( id: any) {
  this.employeeDetailsService.editEmployeId=id;
  this.employeeDetailsService.observable.next("true");
}
public delete( id: any) {
  for(var i=0;i<this.employee.length;i++)
  {
    if(this.employee[i].id == id){
      this.employee.splice(i,1);
    }
  }
}
}
