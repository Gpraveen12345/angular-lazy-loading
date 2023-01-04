import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular12';
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.navigate(['/employedetails']);
  }
}
