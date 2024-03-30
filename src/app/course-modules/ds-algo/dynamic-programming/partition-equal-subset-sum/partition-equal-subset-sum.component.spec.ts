import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitionEqualSubsetSumComponent } from './partition-equal-subset-sum.component';

describe('PartitionEqualSubsetSumComponent', () => {
  let component: PartitionEqualSubsetSumComponent;
  let fixture: ComponentFixture<PartitionEqualSubsetSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartitionEqualSubsetSumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartitionEqualSubsetSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
