import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermovieComponent } from './usermovie.component';

describe('UsermovieComponent', () => {
  let component: UsermovieComponent;
  let fixture: ComponentFixture<UsermovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
