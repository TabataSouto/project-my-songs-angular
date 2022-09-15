import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  private baseUrl: string = 'https://itunes.apple.com/';

  constructor(private http: HttpClient) { }

  getAlbums(artist: string): Observable<any[]> {
    const albumsUrl = `${this.baseUrl}search?entity=album&term=${artist}&attribute=allArtistTerm`
    return this.http.get<any>(albumsUrl);
  }

}
