import { Component, OnInit } from '@angular/core';
import IAlbums from 'src/app/interfaces/IAlbums';

import { IResponseAlbums } from 'src/app/interfaces/IResponseAlbums';

import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  albums: IAlbums[] = [];
  isLoading: boolean = false;
  albumsNotFount: boolean = false;
  artist: string = '';

  constructor(private albumSerive: AlbumService) { }

  ngOnInit(): void {
  }

  getValueSearch(e: string): void {
    this.isLoading = true;
    this.albumsNotFount = false;
    this.artist = e;
    setTimeout(() => {
      this.albums = [];
      this.albumSerive.getAlbums(e).subscribe((album) => { 
        if (!album.results.length) {
            this.isLoading = false;
            this.albumsNotFount = true 
        };
          console.log(album.results);
          this.albums = album.results });
      this.isLoading = false;
    }, 1000);
  }

}
