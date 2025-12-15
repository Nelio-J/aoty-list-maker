'use client';

import Button from "@/app/ui/button";
import { Album, SpotifyArtist } from "@/app/lib/definitions";
import Image from 'next/image';

export default function AlbumResults({ results }: { results: Album[] }) {
  return (
    <div className="grid lg:grid-cols-5 gap-7 py-8 mb-8 md:grid-cols-3 sm:grid-cols-2">
      {results.map((album: Album) => (
        <div key={album.id}>
          <Image
            src={album.images?.[0]?.url}
            width={500}
            height={500}
            className="aspect-square md:block"
            alt={`Cover for ${album.name}`}
          />
          <p className="font-semibold text-xl">{album.name}</p>
          <p className="">{album.artists.map((a: SpotifyArtist) => a.name).join(", ")}</p>
          <p className="">{album.release_date}</p>
          <Button
            onClick={() => {
              console.log(`Add ${album.name} to the list`);
            }}
          >
            Add to List
          </Button>
        </div>
      ))}
    </div>
  );
}