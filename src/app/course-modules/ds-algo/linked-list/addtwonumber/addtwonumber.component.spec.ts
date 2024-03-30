import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtwonumberComponent } from './addtwonumber.component';

describe('AddtwonumberComponent', () => {
  let component: AddtwonumberComponent;
  let fixture: ComponentFixture<AddtwonumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtwonumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtwonumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
