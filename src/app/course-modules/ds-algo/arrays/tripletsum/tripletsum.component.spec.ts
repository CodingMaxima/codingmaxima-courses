import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripletsumComponent } from './tripletsum.component';

describe('TripletsumComponent', () => {
  let component: TripletsumComponent;
  let fixture: ComponentFixture<TripletsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripletsumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripletsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
