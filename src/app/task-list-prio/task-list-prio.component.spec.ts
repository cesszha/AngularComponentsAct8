import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPrioComponent } from './task-list-prio.component';

describe('TaskListPrioComponent', () => {
  let component: TaskListPrioComponent;
  let fixture: ComponentFixture<TaskListPrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListPrioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListPrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
