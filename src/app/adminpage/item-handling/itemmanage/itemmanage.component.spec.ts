import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemmanageComponent } from './itemmanage.component';

describe('ItemmanageComponent', () => {
  let component: ItemmanageComponent;
  let fixture: ComponentFixture<ItemmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
