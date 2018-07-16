import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfileComponentComponent } from './search-profile-component.component';

describe('SearchProfileComponentComponent', () => {
  let component: SearchProfileComponentComponent;
  let fixture: ComponentFixture<SearchProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
