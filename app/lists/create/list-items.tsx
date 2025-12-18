'use client';

import { ListItem } from "@/app/lib/definitions";
import Image from "next/image";
import Button from "@/app/ui/button";
import { XCircleIcon } from '@heroicons/react/24/outline';

import { useState, useEffect } from "react";

export default function ListItems() {
  const [albums, setAlbums] = useState<ListItem[]>(() => {
    const saved = localStorage.getItem("albums");
    return saved ? JSON.parse(saved) : [];
  });
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    console.log('triggered use effect')
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [albums]);
  
  // Edit button that toggle's on/off the delete album button
  function toggleEdit() {
    return selected == true ? setSelected(false) : setSelected(true);
  }

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
    <div className="px-8 bg-teal-500">
      <div className="block">
        <h1 className="text-2xl font-bold pt-8 mb-4">Album Collage Builder</h1>
        <Button
          onClick={() => {
            toggleEdit();
          }}
          styling="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          Edit list
        </Button>
      </div>

      {albums.length === 0 && <p>No albums added yet.</p>}

      <div className="grid lg:grid-cols-5 gap-7 py-8 mb-8 md:grid-cols-3 sm:grid-cols-2">
        {albums.map((album) => (
          <div key={album.id} className="relative">
            <Image
              src={album.images}
              width={500}
              height={500}
              className="aspect-square md:block"
              alt={`Cover for ${album.name}`}
            />
              <p className="font-semibold text-2xl text-center text-shadow-sm text-shadow-zinc-900 line-clamp-2">
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

