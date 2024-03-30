import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterMoviesComponent } from './alter-movies.component.html.component';

describe('AlterMoviesComponent', () => {
  let component: AlterMoviesComponent;
  let fixture: ComponentFixture<AlterMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
