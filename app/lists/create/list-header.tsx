'use client';

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useLocalStorage } from "@/app/lib/useLocalStorage";
import Image from "next/image";
import Button from "@/app/ui/button";
import { XCircleIcon } from '@heroicons/react/24/outline';
import { sixtyfour, gasoekOne } from "@/app/ui/fonts";
import { ListItem } from "@/app/lib/definitions";

type Props = { selected: boolean; albums: ListItem[]; setAlbums: Dispatch<SetStateAction<ListItem[]>> };

export default function ListHeader({ selected, albums, setAlbums }: Props) {
  const [title, setTitle] = useLocalStorage<string>("title", "");
  const [input, setInput] = useState<string>(title);

  useEffect(() => {
    setInput(title);
  }, [title]);

  const saveTitle = useDebouncedCallback((value: string) => {
    setTitle(value);
  }, 300);

  const handleChange = (value: string) => {
    setInput(value);
    saveTitle(value);
  };

  function handleRemoveAlbum(listItem: ListItem) {
    const alreadyExists = albums.some(album => album.id === listItem.id);
    if (alreadyExists) {
      const updatedAlbums = albums.filter(album => album.id !== listItem.id);
      setAlbums(updatedAlbums);
      console.log(`Removed ${listItem.name} from your list.`);
      return;
    }
  }

  const first = albums[0];

  return (
    <div id="header" className="flex flex-col items-center p-8 h-1/5 mt-10 mb-20">

      <input
        className={`${sixtyfour.className} antialiased text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center w-full text-shadow-lg text-shadow-rose-950`}
        type="text"
        placeholder="....ALBUM OF THE YEAR"
        maxLength={25}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <div className="flex flex-row items-center justify-center mt-15">    
        {albums.length === 0 && <p>No albums added yet.</p>}

        {/* <div className="border-2 relative border-amber-500 aspect-square h-[470px] w-[470px]"></div> */}
        {first && (          
            <div key={first.id} className="relative">
              <Image
                src={first.images}
                width={600}
                height={600}
                className="aspect-square md:block"
                alt={`Cover for ${first.name}`}
              />
                <p className={`${gasoekOne.className} antialiased z-10 p-2 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-shadow-md text-shadow-zinc-900 uppercase`}>
                  {first.name}
                </p>
                <Button
                  onClick={() => {
                    handleRemoveAlbum({
                      id: first.id,
                      name: first.name,
                      images: first.images,
                    });
                  }}
                  styling={selected ? "" : "invisible"}
                >
                  <XCircleIcon className="absolute left-3 top-3 h-8 w-8 text-black fill-red-600 hover:text-gray-700 hover:fill-red-400 cursor-pointer" />
                </Button>
              </div>
          // <Image
          //   src={"https://i.scdn.co/image/ab67616d0000b273a7493f1985f820a9add223d2"}
          //   width={550}
          //   height={550}
          //   className="aspect-square md:block"
          //   alt={`Decorative border`}
          // />

        )}
        {/* <Image
          src={"/list-decoration/aoty-border-square.png"}
          width={600}
          height={600}
          className="absolute md:block pointer-events-none opacity-70"
          alt={`Decorative border`}
        /> */}
        {/* <Image
          src={"/list-decoration/aoty-border.png"}
          width={600}
          height={600}
          className="absolute aspect-square md:block opacity-70 mt-10"
          alt={`Cover for ${""}`}
        /> */}
      </div>
      {/* <p
        className={`${gasoekOne.className} antialiased z-10 p-2 mb-5 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-shadow-md text-shadow-zinc-900 uppercase`}
      >
        Sincerely,
      </p> */}
      {/* <p className="text-sm opacity-80">Albums in list: {albums.length}</p> */}
    </div>
  );
}