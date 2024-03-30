import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TostringComponent } from './tostring.component';

describe('TostringComponent', () => {
  let component: TostringComponent;
  let fixture: ComponentFixture<TostringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TostringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TostringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
