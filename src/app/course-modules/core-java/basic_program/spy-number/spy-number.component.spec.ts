import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyNumberComponent } from './spy-number.component';

describe('SpyNumberComponent', () => {
  let component: SpyNumberComponent;
  let fixture: ComponentFixture<SpyNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
