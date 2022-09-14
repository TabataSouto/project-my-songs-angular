import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AlbumComponent } from './components/pages/album/album.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ProfileEditComponent } from './components/pages/profile-edit/profile-edit.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AlbumComponent,
    FavoritesComponent,
    ProfileComponent,
    ProfileEditComponent,
    NotFoundComponent,
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
