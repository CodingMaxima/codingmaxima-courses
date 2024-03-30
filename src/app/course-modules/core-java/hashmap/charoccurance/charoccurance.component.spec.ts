import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharoccuranceComponent } from './charoccurance.component';

describe('CharoccuranceComponent', () => {
  let component: CharoccuranceComponent;
  let fixture: ComponentFixture<CharoccuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharoccuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharoccuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
