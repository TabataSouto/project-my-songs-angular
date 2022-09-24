import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  username!: string;
  imageProfile!: string;
  faUserCircle = faUserCircle;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const data = this.localStorageService.get('user');
    this.username = data.username;
    this.imageProfile = data.image;
  }

}
