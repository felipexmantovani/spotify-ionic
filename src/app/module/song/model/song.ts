import { Artist } from '../../artist/model/artist';

export class Song {
  id: number = null;
  artist: Artist;
  title: string = null;
  active: boolean = false;
  liked: boolean = false;
}
