import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordboggleComponent } from './wordboggle.component';

describe('WordboggleComponent', () => {
  let component: WordboggleComponent;
  let fixture: ComponentFixture<WordboggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordboggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordboggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
