import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquestringsComponent } from './uniquestrings.component';

describe('UniquestringsComponent', () => {
  let component: UniquestringsComponent;
  let fixture: ComponentFixture<UniquestringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniquestringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniquestringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
