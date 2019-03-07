import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `<h1>Hello {{name}}</h1>
  <songs></songs>
  `
})
export class AppComponent  { name = 'Carlos'; }
