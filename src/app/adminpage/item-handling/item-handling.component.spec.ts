import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHandlingComponent } from './item-handling.component';

describe('ItemHandlingComponent', () => {
  let component: ItemHandlingComponent;
  let fixture: ComponentFixture<ItemHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
