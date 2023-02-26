import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourse';
  values = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
  ];

  handleSelectChanged(data: any) {
    console.log(data);
  }

  handleInputChanged(data: any) {
    console.log(data);
  }
}
