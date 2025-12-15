// Server page to handle search results. Client side rendering and functionality are added with components.
import { searchAlbums } from '@/app/lib/actions';
import AlbumResults from '@/app/lists/search/album-results';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search results',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  console.log("Search query:", query);
  const results = await searchAlbums(query);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mt-4 mb-4 text-center">Search Results for {query}</h1>
      <AlbumResults results={results} />
    </div>
  );
}