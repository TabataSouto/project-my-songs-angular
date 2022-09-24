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
  @Input() album!: ISong;

  classes: string[] = [];
  getFavoritesSongs: ISong[] = [];

  faHeart = faHeart;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getFavoritesSongs = this.localStorageService.get('favorites')
    if (this.getFavoritesSongs) {
      this.getFavoritesSongs.map(
        s => s.trackId === this.album.trackId && this.classes.push('favorite')
      )
    }
  }

  // favorite({ target: { checked } }: any, song: ISong) {
  //   console.log(checked)
  //   if (checked) {
  //     this.classes.push('favorite');
  //     this.localStorageService.saveFavoriteSong(song);
  //   } else {
  //     this.classes = [];
  //     this.localStorageService.removeFavoriteSong(song);
  //   }
  // }

}
