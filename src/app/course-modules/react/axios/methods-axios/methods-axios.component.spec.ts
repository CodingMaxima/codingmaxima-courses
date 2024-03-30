import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsAxiosComponent } from './methods-axios.component';

describe('MethodsAxiosComponent', () => {
  let component: MethodsAxiosComponent;
  let fixture: ComponentFixture<MethodsAxiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodsAxiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsAxiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
