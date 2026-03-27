import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "./components/EmailSignup";
import BlogCard from "./components/BlogCard";
import { getRecentPosts } from "./data/posts";
import { getFeaturedProducts } from "./data/products";

export const metadata: Metadata = {
  title: "Bakes | Official Site | Lyrical Hip-Hop Artist San Diego",
  description:
    "Official site of Bakes — lyrical hip-hop artist from San Diego, CA. Stream music, shop Divine Timing merch, read the blog. #3 VEVO Incoming Hip-Hop.",
};

const pressLogos = [
  { name: "VEVO", detail: "#3 Incoming Hip-Hop", url: "https://www.vevo.com" },
  { name: "GQ", detail: "10 Songs to Sweat To", url: "https://www.gq.com" },
  { name: "The Source", detail: "Featured Artist", url: "https://thesource.com/2022/06/28/bakes-from-lyrical-poet-to-versatile-rapper/" },
  { name: "HipHopWeekly", detail: "Featured", url: null },
  { name: "Thisis50", detail: "New Artist", url: "https://web.archive.org/web/20240615231405/https://thisis50.com/2022/02/04/bakes-releases-official-video-for-single-my-opinion/" },
  { name: "Lord Sear", detail: "New Artist Spotlight", url: null },
];

export default function HomePage() {
  const recentPosts = getRecentPosts(3);
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* Hero Banner Ad */}
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto 1.5rem' }}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8745120722611220"
          crossorigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            margin: '0 auto',
            minWidth: '600px',
            width: '100%',
          }}
          data-ad-client="ca-pub-8745120722611220"
          data-ad-slot="8349264543"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>

      {/* HERO */}
      <section
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          backgroundColor: "#080b10",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.98) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Gold accent lines */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "30%",
            bottom: "30%",
            width: "3px",
            background: "linear-gradient(180deg, transparent, #FFD700, transparent)",
            opacity: 0.4,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "30%",
            bottom: "30%",
            width: "3px",
            background: "linear-gradient(180deg, transparent, #FFD700, transparent)",
            opacity: 0.4,
          }}
          aria-hidden="true"
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1000px",
            padding: "6rem 1.5rem 4rem",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.5em",
              color: "#FFD700",
              marginBottom: "1rem",
            }}
          >
            OFFICIAL SITE
          </p>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(5rem, 20vw, 16rem)",
              lineHeight: 0.85,
              color: "#ffffff",
              letterSpacing: "0.03em",
              marginBottom: "0.5rem",
              textShadow: "0 0 120px rgba(255,215,0,0.15)",
            }}
          >
            BAKES
          </h1>
          <p className="hero-tagline"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(0.75rem, 2.5vw, 1.3rem)",
              letterSpacing: "0.3em",
              color: "#AAAAAA",
              marginBottom: "3rem",
            }}
          >
            LYRICAL HIP-HOP &nbsp;|&nbsp; SAN DIEGO, CA
          </p>

          <div className="hero-ctas"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "4rem",
              width: "100%",
              padding: "0 1rem",
            }}
          >
            <Link href="/music" className="btn-gold" style={{ fontSize: "1.1rem", padding: "0.9rem 2rem", textAlign: "center" }}>
              LISTEN NOW
            </Link>
            <Link href="/store" className="btn-outline-gold" style={{ fontSize: "1.1rem", padding: "0.9rem 2rem", textAlign: "center" }}>
              SHOP DIVINE TIMING
            </Link>
          </div>

          {/* Press mentions */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              opacity: 0.6,
            }}
          >
            {pressLogos.map((p) => (
              p.url ? (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "#888", textDecoration: "none" }}>
                  {p.name}
                </a>
              ) : (
                <span key={p.name} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "#888" }}>
                  {p.name}
                </span>
              )
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(180deg, transparent, #FFD700)",
            }}
          />
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              color: "#FFD700",
            }}
          >
            SCROLL
          </p>
        </div>
      </section>

      {/* PRESS BAR */}
      <section
        style={{
          backgroundColor: "#0d1018",
          padding: "1.5rem",
          borderTop: "1px solid rgba(255,215,0,0.1)",
          borderBottom: "1px solid rgba(255,215,0,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {pressLogos.map((p) => {
            const inner = (
              <div key={p.name} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.15em", color: "#FFD700", lineHeight: 1, marginBottom: "0.2rem" }}>
                  {p.name}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#555", letterSpacing: "0.05em" }}>
                  {p.detail}
                </p>
              </div>
            );
            return p.url ? (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{inner}</a>
            ) : inner;
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "6rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Artist photo */}
        <div
          style={{
            aspectRatio: "3/4",
            position: "relative",
            overflow: "hidden",
            maxWidth: "400px",
          }}
        >
          <img
            src="/images/gallery/bakes-professional-photoshoot-lyrical-hiphop-artist-002.jpg"
            alt="Bakes — lyrical hip-hop artist San Diego"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40%",
              background: "linear-gradient(180deg, transparent, rgba(8,11,16,0.7))",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "4px",
              background: "linear-gradient(180deg, #FFD700, #00FFCC)",
            }}
          />
        </div>

        {/* Bio */}
        <div>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.4em",
              color: "#FFD700",
              marginBottom: "1rem",
            }}
          >
            THE ARTIST
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 0.9,
              color: "#ffffff",
              marginBottom: "1.5rem",
              letterSpacing: "0.05em",
            }}
          >
            BAY AREA ROOTS.
            <br />
            <span style={{ color: "#FFD700" }}>SAN DIEGO</span>
            <br />
            MADE.
          </h2>
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "1rem",
              lineHeight: 1.8,
              fontFamily: "Inter, sans-serif",
              marginBottom: "1rem",
            }}
          >
            Bakes is a lyrical hip-hop artist whose music sits at the intersection of
            introspection and power. Raised in the Bay Area and rooted in San Diego, his
            sound carries the hunger of Northern California with the open-sky energy of the
            Pacific coast.
          </p>
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "1rem",
              lineHeight: 1.8,
              fontFamily: "Inter, sans-serif",
              marginBottom: "1rem",
            }}
          >
            Recognized as{" "}
            <span style={{ color: "#FFD700" }}>#3 VEVO Incoming Hip-Hop</span>, featured in{" "}
            <span style={{ color: "#FFD700" }}>GQ</span>,{" "}
            <span style={{ color: "#FFD700" }}>The Source</span>, and{" "}
            <span style={{ color: "#FFD700" }}>HipHopWeekly</span>, Bakes has built a
            catalog that speaks to dreamers, builders, and truth-seekers worldwide.
          </p>
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "1rem",
              lineHeight: 1.8,
              fontFamily: "Inter, sans-serif",
              marginBottom: "2rem",
            }}
          >
            His brand, <em style={{ color: "#00FFCC" }}>Divine Timing</em>, is more than
            music — it&apos;s a philosophy. Trust the process. Do the work. Everything
            arrives when it&apos;s meant to.
          </p>
          <Link href="/about" className="btn-outline-gold">
            FULL BIO
          </Link>
        </div>
      </section>

      {/* MUSIC */}
      <section
        style={{
          backgroundColor: "#0d1018",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "#FFD700",
              margin: "0 auto 1.5rem",
            }}
          />
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#ffffff",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            LATEST MUSIC
          </h2>
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "1rem",
              fontFamily: "Inter, sans-serif",
              marginBottom: "3rem",
            }}
          >
            Stream on Spotify, Apple Music, YouTube, and Tidal.
          </p>

          {/* Spotify embed placeholder */}
          <div
            style={{
              backgroundColor: "#121820",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "12px",
              padding: "3rem 2rem",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#1DB954",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.2rem",
                  color: "#ffffff",
                  letterSpacing: "0.08em",
                }}
              >
                SPOTIFY PLAYER
              </p>
              <p style={{ color: "#555", fontSize: "0.8rem", fontFamily: "Inter, sans-serif" }}>
                Embed will appear here once linked
              </p>
            </div>
          </div>

          <Link href="/music" className="btn-gold">
            VIEW ALL MUSIC
          </Link>
        </div>
      </section>

      {/* MERCH PREVIEW */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.4em",
                color: "#FFD700",
                marginBottom: "0.5rem",
              }}
            >
              BAKES CLOTHING
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#ffffff",
                letterSpacing: "0.05em",
                lineHeight: 0.9,
              }}
            >
              DIVINE TIMING
              <br />
              <span style={{ color: "#888", fontSize: "0.6em", letterSpacing: "0.3em" }}>CAPSULE 001</span>
            </h2>
          </div>
          <Link href="/store" className="btn-outline-gold">
            SHOP ALL
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href="/store"
              style={{
                textDecoration: "none",
                display: "block",
                backgroundColor: "#0d1018",
                transition: "transform 0.3s ease",
              }}
              className="card-hover"
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  backgroundColor: "#121820",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1rem",
                    color: "#2a2a2a",
                    letterSpacing: "0.3em",
                  }}
                >
                  DIVINE TIMING
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    backgroundColor: "#FFD700",
                    color: "#080b10",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "0.9rem",
                    padding: "0.2rem 0.5rem",
                  }}
                >
                  ${product.price}
                </div>
              </div>
              <div style={{ padding: "1rem" }}>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.1rem",
                    color: "#ffffff",
                    letterSpacing: "0.06em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {product.name}
                </p>
                <p style={{ color: "#555", fontSize: "0.75rem", fontFamily: "Inter, sans-serif" }}>
                  {product.sizes.join(" / ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section
        style={{
          backgroundColor: "#0d1018",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "#FFD700",
              margin: "0 auto 1.5rem",
            }}
          />
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#ffffff",
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
            }}
          >
            SHOWS
          </h2>
          <div
            style={{
              border: "1px solid rgba(255,215,0,0.2)",
              padding: "2rem",
              marginBottom: "2rem",
              backgroundColor: "#080b10",
            }}
          >
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                letterSpacing: "0.08em",
                color: "#AAAAAA",
                marginBottom: "0.5rem",
              }}
            >
              NO UPCOMING SHOWS
            </p>
            <p style={{ color: "#555", fontSize: "0.9rem", fontFamily: "Inter, sans-serif" }}>
              Follow on Instagram for show announcements
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://instagram.com/bakesmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              FOLLOW ON INSTAGRAM
            </a>
            <Link href="/shows" className="btn-outline-gold">
              VIEW ALL SHOWS
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.4em",
                color: "#FFD700",
                marginBottom: "0.5rem",
              }}
            >
              BLOG
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#ffffff",
                letterSpacing: "0.05em",
                lineHeight: 0.9,
              }}
            >
              LATEST POSTS
            </h2>
          </div>
          <Link href="/blog" className="btn-outline-gold">
            ALL POSTS
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} variant="featured" />
          ))}
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <EmailSignup />
    </>
  );
}
