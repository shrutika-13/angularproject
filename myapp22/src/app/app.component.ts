import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`<h1>welcome to angular</h1>
            <h2>{{title}}  this is my first project</h2>`,
  
  //styleUrls: ['./app.component.css'],
  
 // styles:['h1{color:red}','h2{color:cyan}']
})
export class AppComponent {
  title = 'myapp22';
}
