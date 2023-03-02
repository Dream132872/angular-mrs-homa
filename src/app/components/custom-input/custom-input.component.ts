import { OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  @Input() inputType: 'text' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() isRequired: boolean = false;
  @Input() isValid: boolean = true;
  @Output() setValue: EventEmitter<any> = new EventEmitter<any>();
  @Input() label: string = 'Label ...';
  isFocused = false;

  ngOnInit(): void {
  }

}
