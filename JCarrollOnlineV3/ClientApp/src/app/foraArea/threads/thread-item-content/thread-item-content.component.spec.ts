import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadItemContentComponent } from './thread-item-content.component';

describe('ThreadItemContentComponent', () => {
  let component: ThreadItemContentComponent;
  let fixture: ComponentFixture<ThreadItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadItemContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
