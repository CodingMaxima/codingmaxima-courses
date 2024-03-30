import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesIntroComponent } from './modules-intro.component';

describe('ModulesIntroComponent', () => {
  let component: ModulesIntroComponent;
  let fixture: ComponentFixture<ModulesIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
