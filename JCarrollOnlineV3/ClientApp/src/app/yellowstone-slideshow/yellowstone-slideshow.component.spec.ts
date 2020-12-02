import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowstoneSlideshowComponent } from './yellowstone-slideshow.component';

describe('YellowstoneSlideshowComponent', () => {
  let component: YellowstoneSlideshowComponent;
  let fixture: ComponentFixture<YellowstoneSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowstoneSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowstoneSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
