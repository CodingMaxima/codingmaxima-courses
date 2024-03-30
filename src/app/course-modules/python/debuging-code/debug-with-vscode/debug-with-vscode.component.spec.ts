import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugWithVscodeComponent } from './debug-with-vscode.component';

describe('DebugWithVscodeComponent', () => {
  let component: DebugWithVscodeComponent;
  let fixture: ComponentFixture<DebugWithVscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugWithVscodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugWithVscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
