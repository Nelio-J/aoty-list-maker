import getSpotifyAccessToken from "@/app/api/token/get-spotify-access-token";

export async function searchAlbums(query: string) {
  console.log("ACTION: Searching albums for query:", query);

  if (!query.trim()) return [];

  const tokenRes = await getSpotifyAccessToken();
  const { access_token } = await tokenRes.json();

  const searchParams = new URLSearchParams({
    q: query,
    type: "album",
    limit: "10",
  });

  const res = await fetch(
    `https://api.spotify.com/v1/search?${searchParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  console.log("Search results:", data);
  return data.albums?.items || [];
}
