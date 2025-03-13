// app/albums/page.tsx
import Image from 'next/image';
import { Suspense } from 'react';
async function getAlbums() {
    // Using JSONPlaceholder as a sample API
    const res = await fetch('https://rickandmortyapi.com/api/character', {
        next: {
            revalidate: 3600 // Revalidate every hour
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch rick and morty data');
    }

    return res.json();
}

export default async function AlbumsPage() {
    const albums = await getAlbums();
    const data = albums.results;
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Albums</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.map((album: any) => (

                    <div
                        key={album.id}
                        className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <Suspense />
                        <h2 className="font-semibold">{album.name}</h2>
                        <p className="text-gray-600"> ID: {album.id}</p>
                        <Image src={album.image} alt={album.name} width={200} height={200}></Image>
                    </div>
                ))}
            </div>
        </div >
    );
}
