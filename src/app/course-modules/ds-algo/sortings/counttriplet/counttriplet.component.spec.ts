import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounttripletComponent } from './counttriplet.component';

describe('CounttripletComponent', () => {
  let component: CounttripletComponent;
  let fixture: ComponentFixture<CounttripletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounttripletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounttripletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
