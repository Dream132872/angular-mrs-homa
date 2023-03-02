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
  isValid = true;

  handleSelectChanged(data: any) {
    console.log(data);
  }

  handleInputChanged(data: string) {
    if (data.indexOf('@') > 0) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
