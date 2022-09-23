import { Injectable } from '@angular/core';
import { ISong } from 'src/app/interfaces/ISong';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage
  }

  set (key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    return JSON.parse(this.storage.getItem(key)!)
  }
  
  // remove (key: string): any {
  //   this.storage.removeItem(key);
  // }

  saveFavoriteSong(newSong: ISong) {
      const songs: ISong[] = this.get('favorites')
      if (songs) {
        this.set('favorites', [...songs, newSong])
      } else {
        this.set('favorites', [newSong])
      }
  }

  removeFavoriteSong(song: ISong) {
    const songs: ISong[] = this.get('favorites')
    if (songs) {
      this.set('favorites', songs.filter(s => s.trackId !== song.trackId));
    }
  }
}
