import { Component, OnInit } from '@angular/core';
import { ISearch } from 'src/app/interfaces/ISearch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getValueSearch(e: ISearch): void {
    console.log(e.value)
  }

}
