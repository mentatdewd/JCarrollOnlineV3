import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroPostFormComponent } from './micro-post-form.component';

describe('MicroPostFormComponent', () => {
  let component: MicroPostFormComponent;
  let fixture: ComponentFixture<MicroPostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroPostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
