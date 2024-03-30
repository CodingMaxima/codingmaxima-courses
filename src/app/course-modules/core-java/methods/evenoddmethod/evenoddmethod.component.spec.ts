import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenoddmethodComponent } from './evenoddmethod.component';

describe('EvenoddmethodComponent', () => {
  let component: EvenoddmethodComponent;
  let fixture: ComponentFixture<EvenoddmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenoddmethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenoddmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
