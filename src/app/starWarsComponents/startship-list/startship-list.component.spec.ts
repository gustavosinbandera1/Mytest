import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartshipListComponent } from './startship-list.component';

describe('StartshipListComponent', () => {
  let component: StartshipListComponent;
  let fixture: ComponentFixture<StartshipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartshipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartshipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
