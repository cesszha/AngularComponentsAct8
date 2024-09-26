import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalSorterComponent } from './alphabetical-sorter.component';

describe('AlphabeticalSorterComponent', () => {
  let component: AlphabeticalSorterComponent;
  let fixture: ComponentFixture<AlphabeticalSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabeticalSorterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphabeticalSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
