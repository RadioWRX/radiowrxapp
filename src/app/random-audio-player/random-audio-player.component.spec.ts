import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAudioPlayerComponent } from './random-audio-player.component';

describe('RandomAudioPlayerComponent', () => {
  let component: RandomAudioPlayerComponent;
  let fixture: ComponentFixture<RandomAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
