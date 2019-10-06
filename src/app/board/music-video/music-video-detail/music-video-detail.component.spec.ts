import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicVideoDetailComponent } from './music-video-detail.component';

describe('MusicVideoDetailComponent', () => {
  let component: MusicVideoDetailComponent;
  let fixture: ComponentFixture<MusicVideoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicVideoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicVideoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
