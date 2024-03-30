import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeConversionsComponent } from './type-conversions.component';

describe('TypeConversionsComponent', () => {
  let component: TypeConversionsComponent;
  let fixture: ComponentFixture<TypeConversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeConversionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
