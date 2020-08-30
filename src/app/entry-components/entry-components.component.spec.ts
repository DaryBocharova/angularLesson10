import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryComponentsComponent } from './entry-components.component';

describe('EntryComponentsComponent', () => {
  let component: EntryComponentsComponent;
  let fixture: ComponentFixture<EntryComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
