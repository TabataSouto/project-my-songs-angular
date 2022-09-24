import { Component, Input, OnInit } from '@angular/core';

import { ISong } from 'src/app/interfaces/ISong';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})

export class SongCardComponent implements OnInit {
  @Input() song!: ISong;

  class: string = '';
  faHeart = faHeart;
  isChecked: boolean = false;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const favoriteSongs:  ISong[] = this.localStorageService.get('favorites');
    if (favoriteSongs) {
      const song = favoriteSongs.map((s) => {
        const isFavorite = s.trackId === this.song.trackId
        if (isFavorite) {
          this.class = 'favorite';
          this.isChecked = true;
        }
      });
    }
  }

  favorite(song: ISong) {
    this.isChecked = !this.isChecked
    if (this.isChecked) {
      this.class = 'favorite';
      this.localStorageService.saveFavoriteSong(song);
    } else {
      this.class = '';
      this.localStorageService.removeFavoriteSong(song.trackId);
    }
  }

}
