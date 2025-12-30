'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState("");
  const router = useRouter()

  
  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/lists/search?query=${query}`);
  }
  
  return (
    <div className="relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <form onSubmit={handleSearch} className="flex">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="peer block w-full rounded-md bg-gray-200 border border-gray-200 py-[9px] pl-10 text-sm text-gray-700 outline-2 placeholder:text-gray-600"
        />
        <button type="submit" className="ml-2 p-2 bg-gray-400 border text-zinc-800 rounded cursor-pointer">
          Search
        </button>
      </form>
      <MagnifyingGlassIcon className="absolute left-3 top-5 h-[18px] w-[18px] -translate-y-1/2 text-gray-700 peer-focus:text-gray-900" />
    </div>
  );
}
