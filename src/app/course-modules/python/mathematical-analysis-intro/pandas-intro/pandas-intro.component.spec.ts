import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandasIntroComponent } from './pandas-intro.component';

describe('PandasIntroComponent', () => {
  let component: PandasIntroComponent;
  let fixture: ComponentFixture<PandasIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandasIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandasIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
