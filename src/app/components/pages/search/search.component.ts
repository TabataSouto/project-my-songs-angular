import { Component, OnInit } from '@angular/core';
import IAlbums from 'src/app/interfaces/IAlbums';

import { IResponse } from 'src/app/interfaces/IResponse';

import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  albums: IAlbums[] = [];
  artist: string = '';
  isLoading: boolean = false;
  albumsNotFount: boolean = false;

  constructor(private albumSerive: AlbumService) { }

  ngOnInit(): void {
  }

  getValueSearch(e: string) {
    this.isLoading = true;
    this.albumsNotFount = false;
    this.artist = e;
    setTimeout(async () => {
      await this.albumSerive.getAlbums(e).subscribe(
        (album) => {
          if (!album.results.length) {
            this.albumsNotFount = true;
            this.albums = [];
            this.isLoading = false;
          } else {
            this.albums = album.results
            this.albumsNotFount = false;
            this.isLoading = false;
          }
        }
      );
    }, 1000);
  }

}
