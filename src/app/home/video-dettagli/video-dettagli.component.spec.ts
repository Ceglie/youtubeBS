import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDettagliComponent } from './video-dettagli.component';

describe('VideoDettagliComponent', () => {
  let component: VideoDettagliComponent;
  let fixture: ComponentFixture<VideoDettagliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoDettagliComponent]
    });
    fixture = TestBed.createComponent(VideoDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
