import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJsRandomQuoteProjectComponent } from './free-js-random-quote-project.component';

describe('FreeJsRandomQuoteProjectComponent', () => {
  let component: FreeJsRandomQuoteProjectComponent;
  let fixture: ComponentFixture<FreeJsRandomQuoteProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJsRandomQuoteProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJsRandomQuoteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
