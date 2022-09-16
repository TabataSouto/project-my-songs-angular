import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISong } from 'src/app/interfaces/ISong';

import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumSongs: ISong[] = [];
  isLoading: boolean = false;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    setTimeout(() => {
      this.albumService.getSongsAlbum(id).subscribe(
        (song) => {
          this.albumSongs = song.results.slice(1);
          this.isLoading = false;
        }
      );
    }, 1000);
  }

}
