export type Album = {
  id: string;
  name: string;
  images: SpotifyImage[];
  artists: SpotifyArtist[];
  release_date: string;
};

export type SpotifyImage = {
  url: string;
  height: number;
  width: number;
};

export type SpotifyArtist = {
    id: string;
    name: string;
}

export type ListItem = {
  id: string;
  name: string;
  images: string;
  x?: number;
  y?: number
}