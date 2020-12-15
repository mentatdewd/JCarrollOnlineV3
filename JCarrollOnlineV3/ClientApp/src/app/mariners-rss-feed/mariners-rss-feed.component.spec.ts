import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinersRssFeedComponent } from './mariners-rss-feed.component';

describe('MarinersRssFeedComponent', () => {
  let component: MarinersRssFeedComponent;
  let fixture: ComponentFixture<MarinersRssFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarinersRssFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarinersRssFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
