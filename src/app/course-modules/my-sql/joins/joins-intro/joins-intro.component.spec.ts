import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinsIntroComponent } from './joins-intro.component';

describe('JoinsIntroComponent', () => {
  let component: JoinsIntroComponent;
  let fixture: ComponentFixture<JoinsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinsIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
