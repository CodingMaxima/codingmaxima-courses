import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDataComponent } from './pre-data.component';

describe('PreDataComponent', () => {
  let component: PreDataComponent;
  let fixture: ComponentFixture<PreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
