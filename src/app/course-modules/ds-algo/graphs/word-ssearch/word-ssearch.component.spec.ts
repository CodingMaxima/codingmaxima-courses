import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSsearchComponent } from './word-ssearch.component';

describe('WordSsearchComponent', () => {
  let component: WordSsearchComponent;
  let fixture: ComponentFixture<WordSsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordSsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordSsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
