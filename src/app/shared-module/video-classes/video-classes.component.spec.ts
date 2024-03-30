import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoClassesComponent } from './video-classes.component';

describe('VideoClassesComponent', () => {
  let component: VideoClassesComponent;
  let fixture: ComponentFixture<VideoClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
