import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExceptionHandlingComponent } from './file-exception-handling.component';

describe('FileExceptionHandlingComponent', () => {
  let component: FileExceptionHandlingComponent;
  let fixture: ComponentFixture<FileExceptionHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileExceptionHandlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileExceptionHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
