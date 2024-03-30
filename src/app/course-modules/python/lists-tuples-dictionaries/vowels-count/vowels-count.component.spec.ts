import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelsCountComponent } from './vowels-count.component';

describe('VowelsCountComponent', () => {
  let component: VowelsCountComponent;
  let fixture: ComponentFixture<VowelsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VowelsCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VowelsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
