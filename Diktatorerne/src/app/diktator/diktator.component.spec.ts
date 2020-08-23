import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiktatorComponent } from './diktator.component';

describe('DiktatorComponent', () => {
  let component: DiktatorComponent;
  let fixture: ComponentFixture<DiktatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiktatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiktatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
