import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Router } from '@angular/router';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username!: string;
  imageProfile!: string;
  faUserCircle = faUserCircle;
  path!: string;
  

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const data = this.localStorageService.get('user');
    this.username = data.username;
    this.imageProfile = data.image;
    this.path = this.router.url;
  }
}
