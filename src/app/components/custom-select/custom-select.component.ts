import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent {
  @Input('placeholder') placeholder: string = '';

  value: string = '';

  values: string[] = [
    'value 1',
    'value 2',
    'value 3',
    'value 4'
  ];

  showValues = false;

  handleSelectValueClicked(value: string) {
    this.value = value;
    this.showValues = false;
  }
}
