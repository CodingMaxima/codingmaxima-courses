import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquenumbersumComponent } from './uniquenumbersum.component';

describe('UniquenumbersumComponent', () => {
  let component: UniquenumbersumComponent;
  let fixture: ComponentFixture<UniquenumbersumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniquenumbersumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniquenumbersumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
