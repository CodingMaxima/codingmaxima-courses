import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IspalidromeComponent } from './ispalidrome.component';

describe('IspalidromeComponent', () => {
  let component: IspalidromeComponent;
  let fixture: ComponentFixture<IspalidromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IspalidromeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IspalidromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
