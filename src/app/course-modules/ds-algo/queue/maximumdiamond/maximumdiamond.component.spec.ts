import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumdiamondComponent } from './maximumdiamond.component';

describe('MaximumdiamondComponent', () => {
  let component: MaximumdiamondComponent;
  let fixture: ComponentFixture<MaximumdiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximumdiamondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaximumdiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
