import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpirallytraversingComponent } from './spirallytraversing.component';

describe('SpirallytraversingComponent', () => {
  let component: SpirallytraversingComponent;
  let fixture: ComponentFixture<SpirallytraversingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpirallytraversingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpirallytraversingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
