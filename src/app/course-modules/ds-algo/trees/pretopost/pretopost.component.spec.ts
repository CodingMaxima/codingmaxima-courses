import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretopostComponent } from './pretopost.component';

describe('PretopostComponent', () => {
  let component: PretopostComponent;
  let fixture: ComponentFixture<PretopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretopostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
