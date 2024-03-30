import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlargestComponent } from './klargest.component';

describe('KlargestComponent', () => {
  let component: KlargestComponent;
  let fixture: ComponentFixture<KlargestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlargestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlargestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
