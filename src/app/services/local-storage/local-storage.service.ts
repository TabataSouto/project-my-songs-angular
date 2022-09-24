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
  

  saveFavoriteSong(newSong: ISong) {
      const songs: ISong[] = this.get('favorites')
      if (!songs) {
        this.set('favorites', [newSong])
      } else {
        const getSongs = [...songs, newSong];
        this.set('favorites', getSongs);
      }
  }

  removeFavoriteSong(id: Number) {
    const songs: ISong[] = this.get('favorites');
    if (songs) {
      const updateFavorites = songs.filter((song) => song.trackId !== id);
      this.set('favorites', updateFavorites);
    }
  }
  
}
