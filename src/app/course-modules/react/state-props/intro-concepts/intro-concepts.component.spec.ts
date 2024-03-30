import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroConceptsComponent } from './intro-concepts.component';

describe('IntroConceptsComponent', () => {
  let component: IntroConceptsComponent;
  let fixture: ComponentFixture<IntroConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
