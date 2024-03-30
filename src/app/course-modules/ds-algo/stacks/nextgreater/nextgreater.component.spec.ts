import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextgreaterComponent } from './nextgreater.component';

describe('NextgreaterComponent', () => {
  let component: NextgreaterComponent;
  let fixture: ComponentFixture<NextgreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextgreaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextgreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
