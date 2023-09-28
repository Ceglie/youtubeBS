import { Component } from '@angular/core';

@Component({
  selector: 'app-video-dettagli',
  templateUrl: './video-dettagli.component.html',
  styleUrls: ['./video-dettagli.component.scss']
})
export class VideoDettagliComponent {
  showParagrafo: boolean = true;

  cambio(){
     this.showParagrafo= !this.showParagrafo
  }
}
