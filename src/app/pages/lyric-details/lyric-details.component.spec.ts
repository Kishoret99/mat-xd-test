import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricDetailsComponent } from './lyric-details.component';

describe('LyricDetailsComponent', () => {
  let component: LyricDetailsComponent;
  let fixture: ComponentFixture<LyricDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
