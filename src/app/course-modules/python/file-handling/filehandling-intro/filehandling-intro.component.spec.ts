import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilehandlingIntroComponent } from './filehandling-intro.component';

describe('FilehandlingIntroComponent', () => {
  let component: FilehandlingIntroComponent;
  let fixture: ComponentFixture<FilehandlingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilehandlingIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilehandlingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
