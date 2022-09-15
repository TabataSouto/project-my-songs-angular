import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  
  value: string = '';
  isDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  searchValue({ target: { value } }: any): void {
    this.isDisabled = value.length > 1 ? false : true;
    this.value = value;
  }

  submit() {
    this.onSubmit.emit(this.value);
  }

}
