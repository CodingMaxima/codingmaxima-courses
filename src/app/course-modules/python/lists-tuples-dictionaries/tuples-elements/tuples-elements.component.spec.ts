import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuplesElementsComponent } from './tuples-elements.component';

describe('TuplesElementsComponent', () => {
  let component: TuplesElementsComponent;
  let fixture: ComponentFixture<TuplesElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuplesElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuplesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
