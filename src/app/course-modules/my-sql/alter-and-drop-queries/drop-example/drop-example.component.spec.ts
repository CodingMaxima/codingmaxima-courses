import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropExampleComponent } from './drop-example.component';

describe('DropExampleComponent', () => {
  let component: DropExampleComponent;
  let fixture: ComponentFixture<DropExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
