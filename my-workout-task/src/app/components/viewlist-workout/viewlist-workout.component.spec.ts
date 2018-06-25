import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlistWorkoutComponent } from './viewlist-workout.component';

describe('ViewlistWorkoutComponent', () => {
  let component: ViewlistWorkoutComponent;
  let fixture: ComponentFixture<ViewlistWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlistWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlistWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
