import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 BASE_URL = environment.baseUrl;
 apiKey = environment.videoApikey;
  constructor(private http : HttpClient) { }


  getVideos(){
    let queryParams: string = [
      `chart=mostPopular`,
      `regionCode=IT`,
      `part=snippet,contentDetails,statistics`,
      `maxResults=12`,
      `type=video`
    ].join('&');
    return this.http.get(`${this.BASE_URL}/youtube/v3/videos?${queryParams}`)
  }
}
