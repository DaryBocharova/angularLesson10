import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleIdComponent } from './module-id.component';

describe('ModuleIdComponent', () => {
  let component: ModuleIdComponent;
  let fixture: ComponentFixture<ModuleIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
