import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashsetintroComponent } from './hashsetintro.component';

describe('HashsetintroComponent', () => {
  let component: HashsetintroComponent;
  let fixture: ComponentFixture<HashsetintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashsetintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashsetintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
