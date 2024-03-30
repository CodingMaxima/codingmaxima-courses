import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebratyproComponent } from './celebratypro.component';

describe('CelebratyproComponent', () => {
  let component: CelebratyproComponent;
  let fixture: ComponentFixture<CelebratyproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebratyproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebratyproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
