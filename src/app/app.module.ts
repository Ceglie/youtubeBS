import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './home/video-list/video-list.component';
import { VideoDettagliComponent } from './home/video-dettagli/video-dettagli.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirettivaDirective } from './home/video-dettagli/direttive/direttiva.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoListComponent,
    VideoDettagliComponent,
    DirettivaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
