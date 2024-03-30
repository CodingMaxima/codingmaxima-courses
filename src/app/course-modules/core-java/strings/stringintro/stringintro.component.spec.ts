import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringintroComponent } from './stringintro.component';

describe('StringintroComponent', () => {
  let component: StringintroComponent;
  let fixture: ComponentFixture<StringintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
