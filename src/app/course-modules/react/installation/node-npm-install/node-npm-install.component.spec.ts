import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeNpmInstallComponent } from './node-npm-install.component';

describe('NodeNpmInstallComponent', () => {
  let component: NodeNpmInstallComponent;
  let fixture: ComponentFixture<NodeNpmInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeNpmInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeNpmInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
