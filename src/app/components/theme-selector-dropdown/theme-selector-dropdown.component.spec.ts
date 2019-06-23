import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSelectorDropdownComponent } from './theme-selector-dropdown.component';

describe('ThemeSelectorDropdownComponent', () => {
  let component: ThemeSelectorDropdownComponent;
  let fixture: ComponentFixture<ThemeSelectorDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSelectorDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSelectorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
