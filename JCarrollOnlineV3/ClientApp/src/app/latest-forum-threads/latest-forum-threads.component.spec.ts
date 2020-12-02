import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestForumThreadsComponent } from './latest-forum-threads.component';

describe('LatestForumThreadsComponent', () => {
  let component: LatestForumThreadsComponent;
  let fixture: ComponentFixture<LatestForumThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestForumThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestForumThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
