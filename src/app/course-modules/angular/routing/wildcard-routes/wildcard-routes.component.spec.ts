import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardRoutesComponent } from './wildcard-routes.component';

describe('WildcardRoutesComponent', () => {
  let component: WildcardRoutesComponent;
  let fixture: ComponentFixture<WildcardRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildcardRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
