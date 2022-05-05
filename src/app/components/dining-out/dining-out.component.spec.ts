import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningOutComponent } from './dining-out.component';

describe('DiningOutComponent', () => {
  let component: DiningOutComponent;
  let fixture: ComponentFixture<DiningOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
