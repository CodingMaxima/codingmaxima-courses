import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredataComponent } from './predata.component';

describe('PredataComponent', () => {
  let component: PredataComponent;
  let fixture: ComponentFixture<PredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
