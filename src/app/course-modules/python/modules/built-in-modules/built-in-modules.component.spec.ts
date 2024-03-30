import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInModulesComponent } from './built-in-modules.component';

describe('BuiltInModulesComponent', () => {
  let component: BuiltInModulesComponent;
  let fixture: ComponentFixture<BuiltInModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
