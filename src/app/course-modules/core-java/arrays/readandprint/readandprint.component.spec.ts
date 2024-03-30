import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadandprintComponent } from './readandprint.component';

describe('ReadandprintComponent', () => {
  let component: ReadandprintComponent;
  let fixture: ComponentFixture<ReadandprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadandprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadandprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
