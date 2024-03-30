import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharOccurStringComponent } from './char-occur-string.component';

describe('CharOccurStringComponent', () => {
  let component: CharOccurStringComponent;
  let fixture: ComponentFixture<CharOccurStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharOccurStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharOccurStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
