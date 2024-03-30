import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartyModulesComponent } from './thirdparty-modules.component';

describe('ThirdpartyModulesComponent', () => {
  let component: ThirdpartyModulesComponent;
  let fixture: ComponentFixture<ThirdpartyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdpartyModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdpartyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
