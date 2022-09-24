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

  classes: string[] = [];
  getFavoritesSongs: ISong[] = [];

  faHeart = faHeart;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  favorite({ target: { checked } }: any, song: ISong) {
  }

}
