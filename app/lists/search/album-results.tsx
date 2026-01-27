'use client';

import Button from "@/app/ui/button";
import { Album, SpotifyArtist, ListItem } from "@/app/lib/definitions";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLocalStorage } from '@/app/lib/useLocalStorage';

export default function AlbumResults({ results }: { results: Album[] }) {
  const router = useRouter()
  const [albums, setAlbums] = useLocalStorage<ListItem[]>("albums", []);

  function handleAddAlbum(listItem: ListItem) {
    const alreadyExists = albums.some(album => album.id === listItem.id);
    if (alreadyExists) {
      router.push("/lists/create");
      console.log(`${listItem.name} is already on your list.`);
      return;
    }

    setAlbums(prev => [...prev, listItem]);
    console.log(`Added ${listItem.name} to your list.`);

    router.push('/lists/create');
  }

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
              handleAddAlbum({
                id: album.id,
                name: album.name,
                images: album.images?.[0]?.url,
              });
            }}
            styling="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
          >
            Add to List
          </Button>
        </div>
      ))}
    </div>
  );
}