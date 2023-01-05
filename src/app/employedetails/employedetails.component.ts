import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeedetailsService } from '../employeedetails.service';
import { ModeldialogeComponent } from '../modeldialoge/modeldialoge.component';

@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.scss']
})
export class EmployedetailsComponent implements OnInit {
  constructor(public dialog: MatDialog, private employeeDetailsService: EmployeedetailsService) {
  }
  ngOnInit() {
    this.employeeDetailsService.observable.subscribe(
      val => {
        if(val != "initialvalue")
        {
        this.createEmployee();
        }
      },
    )
  }
  public createEmployee() {
    const dialogRef = this.dialog.open(ModeldialogeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
