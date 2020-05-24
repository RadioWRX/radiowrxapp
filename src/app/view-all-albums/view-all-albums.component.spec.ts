import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAlbumsComponent } from './view-all-albums.component';

describe('ViewAllAlbumsComponent', () => {
  let component: ViewAllAlbumsComponent;
  let fixture: ComponentFixture<ViewAllAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
