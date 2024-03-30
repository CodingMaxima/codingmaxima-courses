import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngmoduleLazyloadingComponent } from './angmodule-lazyloading.component';

describe('AngmoduleLazyloadingComponent', () => {
  let component: AngmoduleLazyloadingComponent;
  let fixture: ComponentFixture<AngmoduleLazyloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngmoduleLazyloadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngmoduleLazyloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
