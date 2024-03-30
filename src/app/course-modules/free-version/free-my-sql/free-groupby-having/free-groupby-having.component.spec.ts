import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeGroupbyHavingComponent } from './free-groupby-having.component';

describe('FreeGroupbyHavingComponent', () => {
  let component: FreeGroupbyHavingComponent;
  let fixture: ComponentFixture<FreeGroupbyHavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeGroupbyHavingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeGroupbyHavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
