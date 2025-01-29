import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieAddComponent,
    MovieListComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
