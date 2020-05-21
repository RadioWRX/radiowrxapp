import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumOptionsComponent } from './album-options.component';

describe('AlbumOptionsComponent', () => {
  let component: AlbumOptionsComponent;
  let fixture: ComponentFixture<AlbumOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
