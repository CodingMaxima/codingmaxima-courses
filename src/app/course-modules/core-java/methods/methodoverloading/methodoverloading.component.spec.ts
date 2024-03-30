import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodoverloadingComponent } from './methodoverloading.component';

describe('MethodoverloadingComponent', () => {
  let component: MethodoverloadingComponent;
  let fixture: ComponentFixture<MethodoverloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodoverloadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodoverloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
