import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent  {
public employee: any = [];
public employeColumn: any = [];
  constructor(private employeeDetailsService: EmployeedetailsService,private router:Router) {
    this.employee = employeeDetailsService.employedetails;
    this.employeColumn = Object.keys(this.employee[0]);
  }
public edit( id: any) {
  this.employeeDetailsService.editEmployeId=id;
  this.employeeDetailsService.observable.next("true");
  // this.router.navigate([{ outlets: { lazy: ['lazyloading'],side: ['sidebar'] } }]);
  // this.router.navigate([{ outlets: { side: ['sidebar'] } }]);
  this.router.navigate([{ outlets: { lazy: ['lazyloading']}}]);
  console.log("testing navigate");

}
public delete( id: any) {
  for(var i=0;i<this.employee.length;i++)
  {
    if(this.employee[i].id == id){
      this.employee.splice(i,1);
    }
  }
  this.router.navigate([{ outlets: { side: ['sidebar'] } }]);
}
}
