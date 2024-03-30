import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiarraylistComponent } from './multiarraylist.component';

describe('MultiarraylistComponent', () => {
  let component: MultiarraylistComponent;
  let fixture: ComponentFixture<MultiarraylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiarraylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiarraylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
