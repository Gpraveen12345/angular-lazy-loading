import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.scss']
})
export class EmployedetailsComponent implements OnInit {
public displayCreateEmployeeForm = false;
public employee: any = [];
public employeColumn: any = [];
public inputType:any={};
  @ViewChild('myform') myForm: NgForm;
  constructor(private employeeDetailsService: EmployeedetailsService) {
    this.employee = employeeDetailsService.employedetails;
    this.employeColumn = Object.keys(this.employee[0]);
    this.myForm = new NgForm([], []);
    this.setInputFile()
  }

  ngOnInit() {
    this.employeeDetailsService.observable.subscribe(
      val=> { 
        this.setFormValue();
      },
      )
  }

 public setInputFile(){
  this.employeColumn.forEach((col:string) => {
    if(col=="id")
    {
      this.inputType[col]="number";
    }
    else if(col == "email")
    {
     
      this.inputType[col]="email";
    }
    else{
      this.inputType[col]="Text";
    }
  });

 }

  public createEmployee() {
    this.displayCreateEmployeeForm = true;
  }

public closeForm(){
  this.displayCreateEmployeeForm = false;
  this.employeeDetailsService.editEmployeId=undefined;

}

public setFormValue(){
  if(this.employeeDetailsService.editEmployeId != undefined){
  setTimeout(() => {
    var employeEdit;
    for(let i=0;i<this.employee.length;i++){
      if(this.employeeDetailsService.editEmployeId==this.employee[i]['id']){
        employeEdit=this.employee[i];
      }
    }
    for(var i=0;i<this.employeColumn.length;i++)
    {
      this.myForm.controls[this.employeColumn[i]].setValue(employeEdit[this.employeColumn[i]]);
    }
  }, 100);
}
}

public displayEmployeeForm(){
  return this.displayCreateEmployeeForm||this.employeeDetailsService.editEmployeId != undefined;
}

public onSubmit(form: NgForm) {
  var isNewEmployee=true;
  for(let i=0;i< this.employee.length;i++){
    if(this.employee[i]['id']==form.value['id'])
    {
      this.employee[i]=form.value;
      isNewEmployee=false;
    }
  }
  if(isNewEmployee){
    this.employee.push(form.value);
  }
  this.closeForm(); 
}
}
