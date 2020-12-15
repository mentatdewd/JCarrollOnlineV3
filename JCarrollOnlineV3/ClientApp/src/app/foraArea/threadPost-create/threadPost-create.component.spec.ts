import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadPostCreateComponent } from './threadPost-create.component';

describe('ThreadCreateComponent', () => {
  let component: ThreadPostCreateComponent;
  let fixture: ComponentFixture<ThreadPostCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadPostCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
