import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuniquenumberComponent } from './getuniquenumber.component';

describe('GetuniquenumberComponent', () => {
  let component: GetuniquenumberComponent;
  let fixture: ComponentFixture<GetuniquenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetuniquenumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetuniquenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
