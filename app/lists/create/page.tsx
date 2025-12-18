'use client';

import Search from "@/app/ui/search";
import ListItems from "@/app/lists/create/list-items";
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Create List',
// };

export default function Page() {

  return (
    <div className="bg-green-600">
      <h1 className="p-8">Album Collage Builder</h1>
      <div className="p-8">
        <Search placeholder="Search for albums..." />
      </div>
      <ListItems />
    </div>
  );
}
