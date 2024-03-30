import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueNumberComponent } from './unique-number.component';

describe('UniqueNumberComponent', () => {
  let component: UniqueNumberComponent;
  let fixture: ComponentFixture<UniqueNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
