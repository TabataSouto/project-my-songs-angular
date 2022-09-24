import { Component, OnInit } from '@angular/core';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { ILogin } from 'src/app/interfaces/ILogin';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user!: ILogin;
  faUserCircle = faUserCircle;
  
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.user = this.localStorageService.get('user');
  }

}
