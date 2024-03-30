import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JestEnjymeComponent } from './jest-enjyme.component';

describe('JestEnjymeComponent', () => {
  let component: JestEnjymeComponent;
  let fixture: ComponentFixture<JestEnjymeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JestEnjymeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JestEnjymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
