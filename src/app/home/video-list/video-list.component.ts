import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {

constructor(private service : ServicesService){
  this.getVideo()
}


getVideo(){
  this.service.getVideos().subscribe((r)=>{
    console.log(r);
    
  })
}

}

