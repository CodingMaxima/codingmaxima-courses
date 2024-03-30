import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationDecoratorComponent } from './authentication-decorator.component';

describe('AuthenticationDecoratorComponent', () => {
  let component: AuthenticationDecoratorComponent;
  let fixture: ComponentFixture<AuthenticationDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationDecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
