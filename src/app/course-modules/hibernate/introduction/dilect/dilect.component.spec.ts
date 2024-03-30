import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilectComponent } from './dilect.component';

describe('DilectComponent', () => {
  let component: DilectComponent;
  let fixture: ComponentFixture<DilectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DilectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
