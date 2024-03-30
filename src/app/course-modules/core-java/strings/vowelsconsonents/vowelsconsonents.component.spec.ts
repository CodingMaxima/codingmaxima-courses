import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelsconsonentsComponent } from './vowelsconsonents.component';

describe('VowelsconsonentsComponent', () => {
  let component: VowelsconsonentsComponent;
  let fixture: ComponentFixture<VowelsconsonentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VowelsconsonentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VowelsconsonentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
