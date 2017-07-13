import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JsonInputComponent),
      multi: true,
    }
  ]
})
export class JsonInputComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {
  }

  private jsonString: string = "";
  private parseError: boolean;
  private data: any;


  private onChange(event) {
    let newValue = event.target.value;
    try {
      this.data = JSON.parse(newValue);
      this.parseError = false;
    } catch (ex) {
      this.parseError = true;
    }
    this.propagateChange(this.data);
  }

  private propagateChange = (_: any) => { };

  public writeValue(obj: any) {
    if (obj) {
      this.data = obj;
      this.jsonString =
        JSON.stringify(this.data, undefined, 4);
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched() { }

}
