import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddublicatesComponent } from './finddublicates.component';

describe('FinddublicatesComponent', () => {
  let component: FinddublicatesComponent;
  let fixture: ComponentFixture<FinddublicatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinddublicatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinddublicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
