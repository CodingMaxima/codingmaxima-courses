import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraylistintroComponent } from './arraylistintro.component';

describe('ArraylistintroComponent', () => {
  let component: ArraylistintroComponent;
  let fixture: ComponentFixture<ArraylistintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraylistintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraylistintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
