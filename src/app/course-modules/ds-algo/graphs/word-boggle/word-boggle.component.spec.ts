import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordBoggleComponent } from './word-boggle.component';

describe('WordBoggleComponent', () => {
  let component: WordBoggleComponent;
  let fixture: ComponentFixture<WordBoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordBoggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordBoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
