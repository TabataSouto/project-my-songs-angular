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

  async getValueSearch(e: string) {
    this.isLoading = true;
    this.albumsNotFount = false;
    this.artist = e;
    await this.albumSerive.getAlbums(e).subscribe(
      (album) => {
        if (!album.results.length) {
          console.log("Album não foi encontrado!!!")
          this.albumsNotFount = true;
        } else {
          console.log('Album encontrado!!!')
          this.albums = album.results
          this.albumsNotFount = false;
          this.isLoading = false;
        }
      }
    );
  }

}
