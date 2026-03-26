import type { Metadata } from "next";
import EmailSignup from "../components/EmailSignup";

export const metadata: Metadata = {
  title: "Videos | Bakes | Official Music Videos",
  description:
    "Watch official music videos from Bakes — lyrical hip-hop artist from San Diego. Divine Timing on VEVO, Greatness, My Opinion, and more.",
};

const videos = [
  {
    id: "37kAOZ19raA",
    title: "Divine Timing",
    subtitle: "Official Music Video",
    year: "2023",
    badge: "#3 VEVO INCOMING HIP-HOP",
    badgeColor: "#FF0000",
    description:
      'The anthem. "Divine Timing" charted #3 on VEVO\'s Incoming Hip-Hop editorial playlist and introduced Bakes to a global audience. Shot in San Diego, this video captures the energy and philosophy behind the brand.',
    featured: true,
  },
  {
    id: "F7U7saM6QR4",
    title: "Greatness",
    subtitle: "Official Music Video",
    year: "2022",
    badge: null,
    badgeColor: null,
    description:
      "A cinematic look at the pursuit of excellence. \"Greatness\" showcases Bakes at his most ambitious — both lyrically and visually.",
    featured: false,
  },
  {
    id: "AoWKi0qRd8w",
    title: "My Opinion",
    subtitle: "Official Music Video",
    year: "2022",
    badge: "THISIS50 FEATURED",
    badgeColor: "#FFD700",
    description:
      'Unapologetic and direct. "My Opinion" was featured on Thisis50 and showcases Bakes\' ability to blend sharp commentary with undeniable bars.',
    featured: false,
  },
  {
    id: null,
    title: "Effortless",
    subtitle: "Official Music Video",
    year: "2022",
    badge: "GQ SOUTH AFRICA",
    badgeColor: "#FFD700",
    description:
      'The GQ-featured track gets the visual treatment. "Effortless" — smooth, confident, undeniable.',
    featured: false,
    comingSoon: true,
  },
  {
    id: null,
    title: "Complicated",
    subtitle: "Official Music Video",
    year: "2023",
    badge: null,
    badgeColor: null,
    description: "Coming soon.",
    featured: false,
    comingSoon: true,
  },
  {
    id: null,
    title: "Changed",
    subtitle: "Official Music Video",
    year: "2022",
    badge: null,
    badgeColor: null,
    description: "Coming soon.",
    featured: false,
    comingSoon: true,
  },
];

export default function VideosPage() {
  const featured = videos.find((v) => v.featured);
  const rest = videos.filter((v) => !v.featured);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#080b10",
          padding: "8rem 1.5rem 4rem",
          borderBottom: "1px solid rgba(255,215,0,0.1)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.5em",
              color: "#FFD700",
              marginBottom: "1rem",
            }}
          >
            VISUALS
          </p>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: "#fff",
              letterSpacing: "0.05em",
              lineHeight: 0.9,
            }}
          >
            VIDEOS
          </h1>
        </div>
      </section>

      {/* Featured video */}
      {featured && (
        <section
          style={{
            backgroundColor: "#080b10",
            padding: "4rem 1.5rem 2rem",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div style={{ order: 0 }}>
                {featured.badge && (
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "0.8rem",
                      letterSpacing: "0.3em",
                      color: featured.badgeColor || "#FFD700",
                      marginBottom: "0.75rem",
                    }}
                  >
                    ★ {featured.badge}
                  </p>
                )}
                <h2
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(2.5rem, 7vw, 6rem)",
                    color: "#fff",
                    letterSpacing: "0.04em",
                    lineHeight: 0.9,
                    marginBottom: "0.5rem",
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1rem",
                    color: "#555",
                    letterSpacing: "0.15em",
                    marginBottom: "1.5rem",
                  }}
                >
                  {featured.subtitle} · {featured.year}
                </p>
                <p
                  style={{
                    color: "#888",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  {featured.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${featured.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    padding: "0.75rem 2rem",
                    textDecoration: "none",
                  }}
                >
                  WATCH ON YOUTUBE
                </a>
              </div>
              <div
                style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "2px",
                  }}
                  src={`https://www.youtube.com/embed/${featured.id}`}
                  title={`Bakes - ${featured.title} (Official Music Video)`}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video grid */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "#FFD700",
            marginBottom: "1.5rem",
          }}
        />
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            color: "#fff",
            letterSpacing: "0.08em",
            marginBottom: "3rem",
          }}
        >
          ALL VIDEOS
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {rest.map((v) => (
            <div key={v.title} style={{ backgroundColor: "#111" }}>
              {/* Thumbnail / embed */}
              <div
                style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
              >
                {v.id && !v.comingSoon ? (
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={`Bakes - ${v.title}`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                  />
                ) : v.id ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "#0d1018",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        backgroundColor: "#FF0000",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </a>
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "#0d1018",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "1rem",
                        color: "#333",
                        letterSpacing: "0.2em",
                      }}
                    >
                      COMING SOON
                    </p>
                  </div>
                )}
                {v.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      backgroundColor: v.badgeColor || "#FFD700",
                      color: v.badgeColor === "#FF0000" ? "#fff" : "#080b10",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      padding: "0.2rem 0.6rem",
                      zIndex: 1,
                    }}
                  >
                    {v.badge}
                  </div>
                )}
              </div>
              {/* Info */}
              <div style={{ padding: "1.25rem" }}>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.2rem",
                    color: "#fff",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {v.title}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    color: "#555",
                    marginBottom: "0.5rem",
                  }}
                >
                  {v.subtitle} · {v.year}
                </p>
                {!v.comingSoon && (
                  <p
                    style={{
                      color: "#666",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {v.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube CTA */}
      <section
        style={{
          backgroundColor: "#0d1018",
          padding: "4rem 1.5rem",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "#fff",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            MORE ON YOUTUBE
          </h2>
          <p
            style={{
              color: "#666",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              marginBottom: "2rem",
            }}
          >
            Subscribe to BakesVEVO and the official channel for new videos and
            behind-the-scenes content.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.youtube.com/channel/UCnt19v71q2ayun3cgMz3Bpg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#FF0000",
                color: "#fff",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                padding: "0.85rem 2rem",
                textDecoration: "none",
              }}
            >
              BAKESVEVO
            </a>
            <a
              href="https://www.youtube.com/user/YaBoyBakesMusic"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #FF0000",
                color: "#FF0000",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                padding: "0.85rem 2rem",
                textDecoration: "none",
              }}
            >
              OFFICIAL CHANNEL
            </a>
          </div>
        </div>
      </section>

      <EmailSignup />
    </>
  );
}
