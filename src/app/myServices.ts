import { Injectable } from '@angular/core';

@Injectable()
export class MyServices {
  constructor() {}

  addition(a, b) {
    console.log('a+b', a + b);
    return a + b;
  }
}
