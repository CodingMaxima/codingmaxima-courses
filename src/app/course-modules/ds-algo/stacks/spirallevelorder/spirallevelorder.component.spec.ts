import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpirallevelorderComponent } from './spirallevelorder.component';

describe('SpirallevelorderComponent', () => {
  let component: SpirallevelorderComponent;
  let fixture: ComponentFixture<SpirallevelorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpirallevelorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpirallevelorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
