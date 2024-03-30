import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiintroComponent } from './multiintro.component';

describe('MultiintroComponent', () => {
  let component: MultiintroComponent;
  let fixture: ComponentFixture<MultiintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
