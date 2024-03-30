import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowestcommanacesterComponent } from './lowestcommanacester.component';

describe('LowestcommanacesterComponent', () => {
  let component: LowestcommanacesterComponent;
  let fixture: ComponentFixture<LowestcommanacesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowestcommanacesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowestcommanacesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
