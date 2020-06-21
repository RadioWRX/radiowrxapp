import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestViewAlbumComponent } from './guest-view-album.component';

describe('GuestViewAlbumComponent', () => {
  let component: GuestViewAlbumComponent;
  let fixture: ComponentFixture<GuestViewAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestViewAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestViewAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
