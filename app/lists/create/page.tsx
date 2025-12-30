'use client';

import { useCallback, useRef, useState } from 'react';
import Search from "@/app/ui/search";
import Button from "@/app/ui/button";
import PickBackgroundColor from "@/app/ui/background-color-picker";
import EditListButton from "./edit-list-button";
import ListHeader from "./list-header";
import ListItems from "@/app/lists/create/list-items";
import { ListItem } from "@/app/lib/definitions";
import { useLocalStorage } from '@/app/lib/useLocalStorage';
import { toPng } from "@jpinsonneau/html-to-image";
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Create List',
// };

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  const [bgGradientColor1, setbgGradientColor1] = useLocalStorage<string>("bgGradientColor1", "#000000");
  const [bgGradientColor2, setbgGradientColor2] = useLocalStorage<string>("bgGradientColor2", "#000000");
  const [bgGradientColor3, setbgGradientColor3] = useLocalStorage<string>("bgGradientColor3", "#000000");

  const [parentAlbums, setParentAlbums] = useLocalStorage<ListItem[]>("albums", []);
  const [selected, setSelected] = useState<boolean>(false);
  
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-aoty-list.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <div className="bg-gray-900">
      <div className="relative flex flex-col items-center justify-space-between">
        <h1 className="p-5 text-2xl sm:text-3xl md:text-5xl font-bold text-center">Album Collage Builder</h1>
        <div className="p-5 lg:absolute lg:self-end items-center justify-center max-w-sm">
          <Search placeholder="Search for albums..." />
        </div>
      </div>
      <div className="flex flex-wrap p-4 mb-4 space-x-6">
        <h2 className="mr-2 mt-1">Change List Background:</h2>
        <PickBackgroundColor value={bgGradientColor1} onChange={setbgGradientColor1} />
        <PickBackgroundColor value={bgGradientColor2} onChange={setbgGradientColor2} />
        <PickBackgroundColor value={bgGradientColor3} onChange={setbgGradientColor3} />
        <EditListButton selectedState={selected} setSelectedState={setSelected} />
        <Button onClick={onButtonClick} styling="cursor-pointer bg-green-500 p-2 rounded">Export list</Button>
      </div>

      <div ref={ref} id="canvas" className="flex flex-col min-h-[2000px]" style={{ backgroundImage: `linear-gradient(to bottom, ${bgGradientColor1}, ${bgGradientColor2}, ${bgGradientColor3})` }}>
        <ListHeader selected={selected} albums={parentAlbums} setAlbums={setParentAlbums} />
        <ListItems selected={selected} albums={parentAlbums} setAlbums={setParentAlbums} />
      </div>
    </div>
  );
}
