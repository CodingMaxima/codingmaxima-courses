import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesAdvComponent } from './types-adv.component';

describe('TypesAdvComponent', () => {
  let component: TypesAdvComponent;
  let fixture: ComponentFixture<TypesAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
