import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNameGenComponent } from './random-name-gen.component';

describe('RandomNameGenComponent', () => {
  let component: RandomNameGenComponent;
  let fixture: ComponentFixture<RandomNameGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomNameGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNameGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
