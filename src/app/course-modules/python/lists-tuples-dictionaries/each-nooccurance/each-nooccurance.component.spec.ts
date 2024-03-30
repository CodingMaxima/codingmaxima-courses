import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachNooccuranceComponent } from './each-nooccurance.component';

describe('EachNooccuranceComponent', () => {
  let component: EachNooccuranceComponent;
  let fixture: ComponentFixture<EachNooccuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachNooccuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachNooccuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
