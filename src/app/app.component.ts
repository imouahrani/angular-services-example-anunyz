import { Component } from '@angular/core';
import { MyServices } from './myServices';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  a = 1;
  b = 2;
  sum;
  constructor(private myServices: MyServices) {
    this.sum = this.myServices.addition(this.a, this.b);
  }
  addition() {
    this.sum = this.myServices.addition(this.a, this.b);
  }
}
