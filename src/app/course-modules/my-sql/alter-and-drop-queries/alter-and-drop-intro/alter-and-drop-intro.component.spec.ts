import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterAndDropIntroComponent } from './alter-and-drop-intro.component';

describe('AlterAndDropIntroComponent', () => {
  let component: AlterAndDropIntroComponent;
  let fixture: ComponentFixture<AlterAndDropIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterAndDropIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterAndDropIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
