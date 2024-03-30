import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainofresponsibilitiesComponent } from './chainofresponsibilities.component';

describe('ChainofresponsibilitiesComponent', () => {
  let component: ChainofresponsibilitiesComponent;
  let fixture: ComponentFixture<ChainofresponsibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainofresponsibilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainofresponsibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
