"use client";

import Button from "@/app/ui/button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function EditListButton({ selectedState, setSelectedState }: { selectedState: boolean; setSelectedState: (value: boolean) => void }) {
  // Edit button that toggle's on/off the delete album button
  function toggleEdit() {
    return selectedState == true ? setSelectedState(false) : setSelectedState(true);
  }

  return (
    // <div className="sm:flex items-center justify-between space-x-4 px-8">
    <div className="">
      <div className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
        {/* <h1 className="text-2xl font-bold pt-8 mb-4 text-center sm:text-left">Album Collage Builder</h1> */}

        {/* Hide this when the export button is clicked */}
        {/* Icon-only button for mobile*/}
        <Button
          onClick={() => {
            toggleEdit();
          }}
          styling="mt-2 text-white rounded cursor-pointer sm:hidden flex items-center"
          aria-label="Edit list"
        >
          <PencilSquareIcon className="h-6 w-6 text-white hover:text-gray-200" />
        </Button>
      </div>

      {/* Full button for desktop */}
      <div className="hidden sm:flex items-center">
        <Button
          onClick={() => {
            toggleEdit();
          }}
          styling="sm:px-6 sm:py-2 sm:bg-blue-600 sm:text-white sm:hover:bg-blue-500 sm:rounded sm:cursor-pointer flex items-center gap-2"
        >
          <span className="hidden sm:inline">Edit list</span>
          <PencilSquareIcon className="mb-1 h-6 w-6 text-white cursor-pointer" />
        </Button>
      </div>
    </div>
  );
}
