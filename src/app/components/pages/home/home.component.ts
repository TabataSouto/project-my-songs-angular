import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILogin } from 'src/app/interfaces/ILogin';

import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(
    private localStorageService: LocalStorageService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  saveHandler(e: ILogin) {
    this.localStorageService.set('user', e);
    this.route.navigate(['/search']);
  }

}
