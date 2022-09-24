import { Component, OnInit } from '@angular/core';

import { ISong } from 'src/app/interfaces/ISong';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {
  isLoading: boolean = false;
  favoriteSongs: ISong[] = [];
  faSpinner = faSpinner;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.favoriteSongs = this.localStorageService.get('favorites');
      this.isLoading = false;
    }, 1000);
  }

}
