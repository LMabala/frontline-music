import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { AppComponent }          from './components/appComponent/app.component';
import { PlaylistService }       from './services/playlist/playlist.service';
import { PlayerComponent }       from './components/playerComponent/player.component';
import { SongComponent }         from './components/songComponent/song.component';
import { NavbarComponent }       from './components/navbarComponent/navbar.component';
import { ContactComponent }      from './components/contactComponent/contact.component';
import { HomeComponent }         from './components/homeComponent/home.component';
import { FooterComponent }       from './components/footerComponent/footer.component';
import { PageNotFoundComponent } from './components/pageNotFoundComponent/pageNotFound.component';
import { FormsModule }           from '@angular/forms';
import { routing }               from './routing/app.routing';
import { HttpModule }            from '@angular/http';
@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
   ],
  declarations: [
    NavbarComponent,
    AppComponent,
    PlayerComponent,
    SongComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    PageNotFoundComponent
   ],
   providers:[
     PlaylistService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
