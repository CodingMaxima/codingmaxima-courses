import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdbranchmngComponent } from './stdbranchmng.component';

describe('StdbranchmngComponent', () => {
  let component: StdbranchmngComponent;
  let fixture: ComponentFixture<StdbranchmngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdbranchmngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdbranchmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
