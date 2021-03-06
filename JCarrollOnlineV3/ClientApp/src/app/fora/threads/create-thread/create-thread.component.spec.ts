import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThreadComponent } from './create-thread.component';

describe('ThreadCreateComponent', () => {
  let component: CreateThreadComponent;
  let fixture: ComponentFixture<CreateThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
