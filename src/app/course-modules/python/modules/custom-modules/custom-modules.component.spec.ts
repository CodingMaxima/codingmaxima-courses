import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModulesComponent } from './custom-modules.component';

describe('CustomModulesComponent', () => {
  let component: CustomModulesComponent;
  let fixture: ComponentFixture<CustomModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
