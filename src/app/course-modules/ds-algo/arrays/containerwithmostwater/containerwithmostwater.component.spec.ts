import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerwithmostwaterComponent } from './containerwithmostwater.component';

describe('ContainerwithmostwaterComponent', () => {
  let component: ContainerwithmostwaterComponent;
  let fixture: ComponentFixture<ContainerwithmostwaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerwithmostwaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerwithmostwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
