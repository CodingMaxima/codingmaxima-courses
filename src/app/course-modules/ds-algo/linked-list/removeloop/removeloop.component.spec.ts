import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveloopComponent } from './removeloop.component';

describe('RemoveloopComponent', () => {
  let component: RemoveloopComponent;
  let fixture: ComponentFixture<RemoveloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveloopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
