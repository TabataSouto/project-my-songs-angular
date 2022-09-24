import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  searchValue(): void {
    this.isDisabled = this.value.length > 1 ? false : true;
  }

  submit() {
    this.onSubmit.emit(this.value);
    this.value = '';
  }

}
