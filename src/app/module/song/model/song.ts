import { Artist } from '../../artist/model/artist';

export class Song {
  id: number = null;
  active: boolean = false;
  artist: Artist;
  liked: boolean = false;
  time: string = '00:00';
  title: string = null;
}
