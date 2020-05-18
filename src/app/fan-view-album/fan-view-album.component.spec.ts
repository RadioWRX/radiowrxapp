import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanViewAlbumComponent } from './fan-view-album.component';

describe('FanViewAlbumComponent', () => {
  let component: FanViewAlbumComponent;
  let fixture: ComponentFixture<FanViewAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanViewAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanViewAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
