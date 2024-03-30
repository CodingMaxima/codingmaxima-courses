import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludenumberComponent } from './excludenumber.component';

describe('ExcludenumberComponent', () => {
  let component: ExcludenumberComponent;
  let fixture: ComponentFixture<ExcludenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcludenumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
