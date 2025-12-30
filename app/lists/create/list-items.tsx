'use client';

import { Dispatch, SetStateAction } from "react";
import { ListItem } from "@/app/lib/definitions";
import Image from "next/image";
import Button from "@/app/ui/button";
import { XCircleIcon } from '@heroicons/react/24/outline';
import { sixtyfour } from "@/app/ui/fonts";

type Props = { selected: boolean; albums: ListItem[]; setAlbums: Dispatch<SetStateAction<ListItem[]>> };

export default function ListItems({ selected, albums, setAlbums }: Props ) {

  function handleRemoveAlbum(listItem: ListItem) {
    const alreadyExists = albums.some(album => album.id === listItem.id);
    if (alreadyExists) {
      const updatedAlbums = albums.filter(album => album.id !== listItem.id);
      setAlbums(updatedAlbums);
      console.log(`Removed ${listItem.name} from your list.`);
      return;
    }
  }

  return (
      <div id="list-container" className="h-4/5 pt-10">
        <h2 className={`${sixtyfour.className} antialiased text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-shadow-lg text-shadow-rose-950`}>ALL OTHER FAVOURITES (NO ORDER)</h2>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-15 gap-y-8 p-15 mb-8">
          {albums.slice(1).map((album) => (
            <div key={album.id} className="relative">
              <Image
                src={album.images}
                width={600}
                height={600}
                className="aspect-square md:block"
                alt={`Cover for ${album.name}`}
              />
                <p className="font-semibold text-3xl md:text-3xl lg:text-3xl xl:text-4xl pb-1 text-center text-shadow-sm text-shadow-zinc-900 line-clamp-2">
                  {album.name}
                </p>
                <Button
                  onClick={() => {
                    handleRemoveAlbum({
                      id: album.id,
                      name: album.name,
                      images: album.images,
                    });
                  }}
                  styling={selected ? "" : "invisible"}
                >
                  <XCircleIcon className="absolute left-3 top-3 h-8 w-8 text-black fill-red-600 hover:text-gray-700 hover:fill-red-400 cursor-pointer" />
                </Button>
              </div>
          ))}
        </div>
      </div>
  );
}

