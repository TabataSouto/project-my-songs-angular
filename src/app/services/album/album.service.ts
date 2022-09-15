import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseAlbums } from 'src/app/interfaces/IResponseAlbums';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  private baseUrl: string = 'https://itunes.apple.com/';

  constructor(private http: HttpClient) { }

  getAlbums(artist: string): Observable<IResponseAlbums> {
    const albumsUrl = `${this.baseUrl}search?entity=album&term=${artist}&attribute=allArtistTerm`
    return this.http.get<IResponseAlbums>(albumsUrl);
  }

}
