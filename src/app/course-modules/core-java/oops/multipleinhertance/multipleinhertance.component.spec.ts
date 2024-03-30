import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleinhertanceComponent } from './multipleinhertance.component';

describe('MultipleinhertanceComponent', () => {
  let component: MultipleinhertanceComponent;
  let fixture: ComponentFixture<MultipleinhertanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleinhertanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleinhertanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
