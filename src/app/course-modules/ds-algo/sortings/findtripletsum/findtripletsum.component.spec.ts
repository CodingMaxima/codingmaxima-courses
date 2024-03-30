import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindtripletsumComponent } from './findtripletsum.component';

describe('FindtripletsumComponent', () => {
  let component: FindtripletsumComponent;
  let fixture: ComponentFixture<FindtripletsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindtripletsumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindtripletsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
