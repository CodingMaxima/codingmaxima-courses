import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileReadAppendComponent } from './file-read-append.component';

describe('FileReadAppendComponent', () => {
  let component: FileReadAppendComponent;
  let fixture: ComponentFixture<FileReadAppendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileReadAppendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileReadAppendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
