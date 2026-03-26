export type Track = {
  id: string;
  title: string;
  artist: string;
  duration?: string;
  price: number; // minimum price
  downloadUrl?: string; // will be set when files are hosted (S3/CDN)
};

export type Release = {
  id: string;
  title: string;
  type: "Album" | "EP" | "Single" | "Single + Video";
  year: string;
  description: string;
  albumPrice?: number; // for album downloads
  downloadUrl?: string; // album zip download URL (set when hosted)
  tracks: Track[];
  spotifyUrl?: string;
  youtubeUrl?: string;
  featured?: boolean;
};

export const releases: Release[] = [
  {
    id: "divine-timing",
    title: "Divine Timing",
    type: "Single + Video",
    year: "2023",
    description:
      '#3 on VEVO\'s Incoming Hip-Hop editorial playlist. The anthem that defines the brand — and a philosophy for living. "Everything happens exactly when it\'s meant to."',
    tracks: [
      {
        id: "divine-timing-track",
        title: "Divine Timing",
        artist: "Bakes",
        duration: "3:05",
        price: 1.99,
        downloadUrl: undefined, // add S3 URL when ready
      },
    ],
    spotifyUrl: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
    youtubeUrl: "https://www.youtube.com/watch?v=37kAOZ19raA",
    featured: true,
  },
  {
    id: "illusion",
    title: "Illusion",
    type: "Album",
    year: "2022",
    description:
      "A body of work exploring perception, reality, and self. The project that put Bakes on the map — three tracks that hit differently every time you hear them.",
    albumPrice: 5.99,
    tracks: [
      { id: "illusion-track", title: "Illusion", artist: "Bakes", duration: "3:47", price: 1.99 },
      { id: "outlier-track", title: "Outlier", artist: "Bakes", duration: "4:40", price: 1.99 },
      { id: "deep-end-track", title: "Deep End", artist: "Bakes", duration: "3:37", price: 1.99 },
    ],
    spotifyUrl: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
  },
  {
    id: "effortless",
    title: "Effortless",
    type: "Single",
    year: "2022",
    description:
      "Featured in GQ South Africa's \"10 Songs to Sweat To.\" Smooth, confident, undeniable — the song that introduced Bakes to a premium international audience.",
    tracks: [
      { id: "effortless-track", title: "Effortless", artist: "Bakes", duration: "2:54", price: 1.99 },
    ],
    spotifyUrl: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
  },
  {
    id: "complicated",
    title: "Complicated",
    type: "Single",
    year: "2023",
    description:
      "Introspective look at modern relationships and the complexity of growth. For anyone who's ever had to choose between what's easy and what's real.",
    tracks: [
      { id: "complicated-track", title: "Complicated", artist: "Bakes", duration: "3:05", price: 1.99 },
    ],
    spotifyUrl: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
  },
  {
    id: "for-a-long-time",
    title: "For a Long Time",
    type: "Single",
    year: "2023",
    description:
      "Patient energy. Built for the ones playing the long game — who've been putting in work before anyone was watching.",
    tracks: [
      { id: "for-a-long-time-track", title: "For a Long Time", artist: "Bakes", duration: "4:02", price: 1.99 },
    ],
    spotifyUrl: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
  },
  {
    id: "changed",
    title: "Changed",
    type: "Single",
    year: "2022",
    description:
      "Personal evolution captured in bars. A fan favorite that speaks to anyone who's had to outgrow their old self to become who they're meant to be.",
    tracks: [
      { id: "changed-track", title: "Changed", artist: "Bakes", duration: "2:03", price: 1.99 },
    ],
    spotifyUrl: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
  },
  {
    id: "my-opinion",
    title: "My Opinion",
    type: "Single",
    year: "2022",
    description:
      "Unapologetic perspective. Bakes at his most direct — featured on Thisis50. Critical commentary on the state of modern rap, delivered with precision.",
    tracks: [
      { id: "my-opinion-track", title: "My Opinion", artist: "Bakes", duration: "2:18", price: 1.99 },
    ],
    spotifyUrl: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
    youtubeUrl: "https://youtu.be/AoWKi0qRd8w",
  },
  {
    id: "from-the-ground-up",
    title: "From the Ground Up",
    type: "Album",
    year: "2019",
    description:
      'Laid back and intimate — Bakes\' most self-defining music. Produced by Isiah Salazar. Debut single "1AM Somewhere" delves into the descriptive glimpse of the beginning of Bakes\' musical journey. Each track creates a unique sound and radiant belief in self.',
    albumPrice: 27.99,
    tracks: [
      { id: "1am-somewhere-track", title: "1AM Somewhere", artist: "Bakes", duration: "2:18", price: 1.99 },
      // Add remaining tracks when full track list is available
    ],
    spotifyUrl: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
  },
];

export function getFeaturedRelease(): Release | undefined {
  return releases.find((r) => r.featured);
}

export function getAllReleases(): Release[] {
  return releases;
}
