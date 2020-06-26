import { TestBed } from '@angular/core/testing';

import { PlaylistSongService } from './playlist-song.service';

describe('PlaylistSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistSongService = TestBed.get(PlaylistSongService);
    expect(service).toBeTruthy();
  });
});
