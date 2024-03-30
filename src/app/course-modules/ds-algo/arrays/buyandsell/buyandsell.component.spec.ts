import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyandsellComponent } from './buyandsell.component';
describe('BuyandsellComponent', () => {
  let component: BuyandsellComponent;
  let fixture: ComponentFixture<BuyandsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyandsellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyandsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(

    );
  }
  );
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function expect(component: BuyandsellComponent) {
  throw new Error('Function not implemented.');
}

