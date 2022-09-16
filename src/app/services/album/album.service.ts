import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/interfaces/IResponse';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  private baseUrl: string = 'https://itunes.apple.com/';

  constructor(private http: HttpClient) { }

  getAlbums(artist: string): Observable<IResponse> {
    const albumsUrl = `${this.baseUrl}search?entity=album&term=${artist}&attribute=allArtistTerm`
    return this.http.get<IResponse>(albumsUrl);
  }

  getSongsAlbum(id: string): Observable<IResponse> {
    const albumUrl = `${this.baseUrl}lookup?id=${id}&entity=song`
    return this.http.get<IResponse>(albumUrl);
  }

}
