import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './home/video-list/video-list.component';
import { VideoDettagliComponent } from './home/video-dettagli/video-dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoListComponent,
    VideoDettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
