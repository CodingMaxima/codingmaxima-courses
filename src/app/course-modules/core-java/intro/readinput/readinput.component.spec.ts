import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadinputComponent } from './readinput.component';

describe('ReadinputComponent', () => {
  let component: ReadinputComponent;
  let fixture: ComponentFixture<ReadinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
