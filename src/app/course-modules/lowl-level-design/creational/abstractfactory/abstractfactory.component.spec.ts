import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractfactoryComponent } from './abstractfactory.component';

describe('AbstractfactoryComponent', () => {
  let component: AbstractfactoryComponent;
  let fixture: ComponentFixture<AbstractfactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractfactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
