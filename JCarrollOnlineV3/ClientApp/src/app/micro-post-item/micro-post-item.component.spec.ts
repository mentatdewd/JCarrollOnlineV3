import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroPostItemComponent } from './micro-post-item.component';

describe('MicroPostItemComponent', () => {
  let component: MicroPostItemComponent;
  let fixture: ComponentFixture<MicroPostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroPostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
