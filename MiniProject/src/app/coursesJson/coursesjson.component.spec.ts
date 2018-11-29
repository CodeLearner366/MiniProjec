import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesWithJsonComponent } from './coursesjson.component';

describe('CoursesWithJsonComponent', () => {
  let component: CoursesWithJsonComponent;
  let fixture: ComponentFixture<CoursesWithJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesWithJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesWithJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
