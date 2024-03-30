import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappersComponent } from './mappers.component';

describe('MappersComponent', () => {
  let component: MappersComponent;
  let fixture: ComponentFixture<MappersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
