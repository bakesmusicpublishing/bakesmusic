import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Bakes | Official Site | Lyrical Hip-Hop Artist San Diego",
  description:
    "Bakes is a lyrical hip-hop artist from San Diego, CA. Stream music, shop Divine Timing merch, read the blog. Bay Area roots, global reach.",
  keywords: [
    "Bakes",
    "Bakes music",
    "lyrical hip-hop",
    "San Diego hip-hop artist",
    "divine timing",
    "rap music",
    "West Coast hip-hop",
    "Bay Area rapper",
  ],
  authors: [{ name: "Bakes" }],
  creator: "Bakes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bakesmusic.com",
    siteName: "Bakes | Official Site",
    title: "Bakes | Official Site | Lyrical Hip-Hop Artist San Diego",
    description:
      "Bakes is a lyrical hip-hop artist from San Diego, CA. Stream music, shop Divine Timing merch, read the blog. Bay Area roots, global reach.",
    images: [
      {
        url: "https://bakesmusic.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bakes - Lyrical Hip-Hop Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakes | Official Site | Lyrical Hip-Hop Artist San Diego",
    description:
      "Bakes is a lyrical hip-hop artist from San Diego, CA. Stream music, shop Divine Timing merch, read the blog.",
    images: ["https://bakesmusic.com/images/og-image.jpg"],
    creator: "@bakesmusic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />



        {/* Google AdSense — activates when NEXT_PUBLIC_ADSENSE_PUBLISHER_ID is set (e.g. ca-pub-XXXXXXXXXX) */}
        {process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
            crossOrigin="anonymous"
          />
        )}
        {/* Google Analytics — activates when GA_MEASUREMENT_ID env var is set */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (<>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
          ` }} />
        </>)}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "name": "Bakes",
            "url": "https://bakesmusic.com",
            "image": "https://bakesmusic.com/images/og-image.jpg",
            "description": "Bakes is a lyrical hip-hop artist from San Diego, CA. Bay Area-grown, introspective, optimistic, and powerful. Featured on VEVO, GQ, The Source Magazine, HipHopWeekly, and Thisis50.",
            "genre": ["Hip-Hop", "Rap", "Lyrical Hip-Hop"],
            "foundingLocation": {
              "@type": "Place",
              "name": "San Diego, CA"
            },
            "sameAs": [
              "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
              "https://youtube.com/channel/UCnt19v71q2ayun3cgMz3Bpg",
              "https://instagram.com/yaboybakes",
              "https://bakesmusic.com"
            ],
            "album": [
              { "@type": "MusicAlbum", "name": "Illusion", "datePublished": "2022" },
              { "@type": "MusicAlbum", "name": "Outlier", "datePublished": "2021" },
              { "@type": "MusicAlbum", "name": "Deep End", "datePublished": "2020" }
            ]
          }) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#080b10', color: '#ffffff' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
