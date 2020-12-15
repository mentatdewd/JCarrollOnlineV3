import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroPostItemListComponent } from './micro-post-item-list.component';

describe('MicroPostItemListComponent', () => {
  let component: MicroPostItemListComponent;
  let fixture: ComponentFixture<MicroPostItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroPostItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroPostItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
