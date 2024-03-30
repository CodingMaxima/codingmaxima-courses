import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebscrapingExamplesComponent } from './webscraping-examples.component';

describe('WebscrapingExamplesComponent', () => {
  let component: WebscrapingExamplesComponent;
  let fixture: ComponentFixture<WebscrapingExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebscrapingExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebscrapingExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
