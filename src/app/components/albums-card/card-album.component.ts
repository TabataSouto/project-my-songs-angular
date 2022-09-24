import { Component, Input, OnInit } from '@angular/core';

import IAlbums from 'src/app/interfaces/IAlbums';

import { faSpinner } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.css']
})

export class CardAlbumComponent implements OnInit {
  @Input() albums!: IAlbums[];
  @Input() isLoading!: boolean;
  @Input() artist!: string;
  @Input() albumsNotFount!: boolean;

  faSpinner = faSpinner;
  
  constructor() { }

  ngOnInit(): void {
  }

}
