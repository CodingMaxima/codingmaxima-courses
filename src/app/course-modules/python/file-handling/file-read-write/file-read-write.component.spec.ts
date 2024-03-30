import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileReadWriteComponent } from './file-read-write.component';

describe('FileReadWriteComponent', () => {
  let component: FileReadWriteComponent;
  let fixture: ComponentFixture<FileReadWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileReadWriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileReadWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
