import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username!: string;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const data = this.localStorageService.get('user');
    this.username = data.username;
  }

}
