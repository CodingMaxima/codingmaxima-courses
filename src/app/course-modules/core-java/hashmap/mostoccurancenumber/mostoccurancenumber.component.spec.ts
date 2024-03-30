import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostoccurancenumberComponent } from './mostoccurancenumber.component';

describe('MostoccurancenumberComponent', () => {
  let component: MostoccurancenumberComponent;
  let fixture: ComponentFixture<MostoccurancenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostoccurancenumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostoccurancenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
