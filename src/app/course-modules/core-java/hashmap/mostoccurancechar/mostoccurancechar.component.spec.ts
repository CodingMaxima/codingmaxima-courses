import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostoccurancecharComponent } from './mostoccurancechar.component';

describe('MostoccurancecharComponent', () => {
  let component: MostoccurancecharComponent;
  let fixture: ComponentFixture<MostoccurancecharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostoccurancecharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostoccurancecharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
