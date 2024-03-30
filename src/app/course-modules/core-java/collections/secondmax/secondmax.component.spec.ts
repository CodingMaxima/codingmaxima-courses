import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondmaxComponent } from './secondmax.component';

describe('SecondmaxComponent', () => {
  let component: SecondmaxComponent;
  let fixture: ComponentFixture<SecondmaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondmaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
