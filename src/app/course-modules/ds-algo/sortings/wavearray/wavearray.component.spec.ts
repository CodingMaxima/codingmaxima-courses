import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavearrayComponent } from './wavearray.component';

describe('WavearrayComponent', () => {
  let component: WavearrayComponent;
  let fixture: ComponentFixture<WavearrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavearrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavearrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
