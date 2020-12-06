import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForaQueryComponent } from './fora-query.component';

describe('ForaQueryComponent', () => {
  let component: ForaQueryComponent;
  let fixture: ComponentFixture<ForaQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForaQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForaQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
