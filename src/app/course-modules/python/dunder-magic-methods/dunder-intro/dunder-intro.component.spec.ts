import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DunderIntroComponent } from './dunder-intro.component';

describe('DunderIntroComponent', () => {
  let component: DunderIntroComponent;
  let fixture: ComponentFixture<DunderIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DunderIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DunderIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
