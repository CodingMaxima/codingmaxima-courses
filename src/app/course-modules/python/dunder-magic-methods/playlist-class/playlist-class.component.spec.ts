import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistClassComponent } from './playlist-class.component';

describe('PlaylistClassComponent', () => {
  let component: PlaylistClassComponent;
  let fixture: ComponentFixture<PlaylistClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
