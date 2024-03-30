import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueNosumComponent } from './unique-nosum.component';

describe('UniqueNosumComponent', () => {
  let component: UniqueNosumComponent;
  let fixture: ComponentFixture<UniqueNosumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueNosumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueNosumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
