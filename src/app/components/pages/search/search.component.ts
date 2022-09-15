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

  constructor(private albumSerive: AlbumService) { }

  ngOnInit(): void {
  }

  getValueSearch(e: string): void {
    this.isLoading = true;
    setTimeout(() => {
      this.albumSerive.getAlbums(e).subscribe(
        (album) => this.albums = album.results
      )
      this.isLoading = false;
    }, 3000);
  }

}
