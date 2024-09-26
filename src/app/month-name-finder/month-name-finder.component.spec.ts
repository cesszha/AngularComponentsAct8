import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthNameFinderComponent } from './month-name-finder.component';

describe('MonthNameFinderComponent', () => {
  let component: MonthNameFinderComponent;
  let fixture: ComponentFixture<MonthNameFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthNameFinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthNameFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
