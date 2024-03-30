import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapingIntroComponent } from './scraping-intro.component';

describe('ScrapingIntroComponent', () => {
  let component: ScrapingIntroComponent;
  let fixture: ComponentFixture<ScrapingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapingIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
