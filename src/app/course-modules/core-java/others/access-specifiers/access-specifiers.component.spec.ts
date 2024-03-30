import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSpecifiersComponent } from './access-specifiers.component';

describe('AccessSpecifiersComponent', () => {
  let component: AccessSpecifiersComponent;
  let fixture: ComponentFixture<AccessSpecifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSpecifiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSpecifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
