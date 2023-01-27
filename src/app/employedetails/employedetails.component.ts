import { ChangeDetectionStrategy } from '@angular/core';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EmployeedetailsService } from '../employeedetails.service';
import { ModeldialogeComponent } from '../modeldialoge/modeldialoge.component';

@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployedetailsComponent implements OnInit {
  public heading=" Create a new employee";
  public subheading="try this out"
  constructor(public dialog: MatDialog, private employeeDetailsService: EmployeedetailsService,public cdr: ChangeDetectorRef) {
  setTimeout(() => {
    this.heading="change Dectection strategy";
    console.log("change dectection strategy should trigger");
    // cdr.detectChanges(); //This will make the change dectection strategy to mark for the change
  }, 1000);
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
