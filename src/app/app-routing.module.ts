import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/pages/album/album.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';

import { HomeComponent } from './components/pages/home/home.component';
import { ProfileEditComponent } from './components/pages/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SearchComponent } from './components/pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'album/:id', component: AlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
