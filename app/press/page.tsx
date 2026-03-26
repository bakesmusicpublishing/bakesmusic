import type { Metadata } from "next";
import EmailSignup from "../components/EmailSignup";

export const metadata: Metadata = {
  title: "Press | Bakes | Media Coverage & Features",
  description:
    "Bakes media coverage: VEVO #3 Incoming Hip-Hop, GQ South Africa, The Source, HipHopWeekly, Lord Sear, Thisis50, Out Now Magazine, Pop Passion Blog and more.",
};

const featuredPress = [
  {
    outlet: "VEVO",
    badge: "EDITORIAL PLAYLIST",
    headline: "#3 on VEVO Incoming Hip-Hop",
    description:
      'Bakes\' music video for "Divine Timing" charted at #3 on VEVO\'s "Incoming Hip-Hop" editorial playlist — placing him alongside the most buzzed-about names in lyrical hip-hop and driving significant streaming growth to global audiences.',
    url: null,
    year: "2023",
    color: "#FF0000",
  },
  {
    outlet: "GQ SOUTH AFRICA",
    badge: "INTERNATIONAL FEATURE",
    headline: '"10 Songs to Sweat To" — Effortless',
    description:
      'GQ South Africa featured Bakes in their "10 Songs to Sweat To" playlist, highlighting "Effortless" as one of the top workout and motivational anthems. A global fashion and lifestyle publication spotlighting his music to a premium international audience.',
    url: null,
    year: "2022",
    color: "#FFD700",
  },
  {
    outlet: "LORD SEAR",
    badge: "NEW ARTIST SPOTLIGHT",
    headline: "New Artist Spotlight — Bakes",
    description:
      "Hip-hop legend Lord Sear featured Bakes in his New Artist Spotlight series, recognizing him as one of the emerging voices in lyrical hip-hop worth watching. A co-sign from one of the most respected names in underground hip-hop broadcasting.",
    url: null,
    year: "2023",
    color: "#00FFCC",
  },
];

const pressItems = [
  {
    outlet: "The Source",
    date: "June 28, 2022",
    headline: "Bakes: From Lyrical Poet to Versatile Rapper",
    excerpt:
      "For San Diego rapper Bakes, hip-hop was always about finding a way to express himself and his wide range of opinions in an introspective and intelligent way. Since launching his rap career right out of his college apartment in the early 2010s, he has stayed true to his craft and art...",
    url: "https://thesource.com/2022/06/28/bakes-from-lyrical-poet-to-versatile-rapper/",
    author: "Shawn Grant",
  },
  {
    outlet: "Hip Hop Since 1987",
    date: "September 2, 2022",
    headline: "Bakes Talks About His Lyrical Craft",
    excerpt:
      "Growing up in the Bay Area and now based in San Diego, Bakes is an independent artist who has grown and flourished in the West-Coast rap scene. Crafting music focusing on lyrical poetry, Bakes maintains a versatile style that allows him to explore a diverse range of topics...",
    url: "https://hiphopsince1987.com/2022/music/bakes-talks-about-his-lyrical-craft/",
    author: "Burgerrock Media",
  },
  {
    outlet: "Out Now Magazine",
    date: "August 23, 2022",
    headline: "Spotlight Interview With Rising Artist Bakes",
    excerpt:
      "Out Now Magazine Spotlight series featuring rising star Bakes for an in-depth interview on his creative process, musical journey from the Bay Area, and his philosophy of divine timing.",
    url: "https://outnowmagazine.com/spotlight-interview-bakes/",
    author: "Burgerrock Media",
  },
  {
    outlet: "Pop Passion Blog",
    date: "February 14, 2022",
    headline: 'Interview: "Divine Timing" by Bakes',
    excerpt:
      '"The meaning of Divine Timing is that everything in life happens exactly when it\'s supposed to. The song itself is about the different synchronicities in life and believing that this is all meant to be. I\'ve been manifesting my dream, and my vision is coming to fruition." — Bakes',
    url: "https://www.poppassionblog.com/post/interview-divine-timing-by-bakes",
    author: "Sarah Curry",
  },
  {
    outlet: "Today Influencers",
    date: "April 19, 2022",
    headline: 'Bakes Returns With a New Massive Single "My Opinion"',
    excerpt:
      'The new single "My Opinion" from the rising rap star shows viable strength and a pinpoint focus rap. Bakes brings us an East Coast-influenced song that provides critical commentary on the state of modern rap.',
    url: null,
    author: "Burgerrock Media",
  },
  {
    outlet: "L'Officiel Arabia",
    date: "February 22, 2022",
    headline: "Bakes Merchandise Featured on Luisito Comunica",
    excerpt:
      "Bakes' Divine Timing merchandise was featured in L'Officiel Arabia alongside Luisito Comunica — the second most subscribed YouTube channel in Mexico with a massive Spanish-speaking global audience.",
    url: null,
    author: "Burgerrock Media",
  },
  {
    outlet: "Thisis50",
    date: "February 2022",
    headline: 'Bakes Releases Official Video for Single "My Opinion"',
    excerpt:
      'Featured on one of hip-hop\'s most visited platforms, Thisis50 covered the official release of Bakes\' music video for "My Opinion," exposing his sound to millions of hip-hop fans globally.',
    url: "https://web.archive.org/web/20240615231405/https://thisis50.com/2022/02/04/bakes-releases-official-video-for-single-my-opinion/",
    author: "Thisis50 Staff",
  },
  {
    outlet: "HipHopWeekly",
    date: "2022",
    headline: "Featured Artist: Bakes",
    excerpt:
      "In-depth coverage as an independent artist building an authentic career from the West Coast. HipHopWeekly highlighted Bakes' lyrical approach and his ability to stand out in a crowded industry.",
    url: null,
    author: "HipHopWeekly Staff",
  },
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#080b10",
          padding: "8rem 1.5rem 5rem",
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
            MEDIA
          </p>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: "#fff",
              letterSpacing: "0.05em",
              lineHeight: 0.9,
              marginBottom: "1.5rem",
            }}
          >
            PRESS
          </h1>
          <p
            style={{
              color: "#777",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              maxWidth: "600px",
            }}
          >
            Featured on VEVO, GQ, The Source, HipHopWeekly, Thisis50, Lord
            Sear, and more. For press inquiries, use the{" "}
            <a
              href="/contact"
              style={{ color: "#FFD700", textDecoration: "none" }}
            >
              contact form
            </a>
            .
          </p>
        </div>
      </section>

      {/* Featured 3 */}
      <section
        style={{
          backgroundColor: "#0d1018",
          padding: "5rem 1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            MAJOR ACCOLADES
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredPress.map((item) => (
              <div
                key={item.outlet}
                style={{
                  backgroundColor: "#111",
                  padding: "2.5rem",
                  borderTop: `4px solid ${item.color}`,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.3em",
                    color: item.color,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.badge}
                </p>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.8rem",
                    color: "#fff",
                    letterSpacing: "0.05em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.outlet}
                </p>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1rem",
                    color: "#aaa",
                    letterSpacing: "0.05em",
                    marginBottom: "1rem",
                  }}
                >
                  {item.headline}
                </p>
                <p
                  style={{
                    color: "#666",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                  }}
                >
                  {item.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All press */}
      <section
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem" }}
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
          ALL COVERAGE
        </h2>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#1a1a1a" }}
        >
          {pressItems.map((item) => (
            <div
              key={item.outlet + item.date}
              style={{
                backgroundColor: "#111",
                padding: "2rem",
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.1rem",
                    color: "#FFD700",
                    letterSpacing: "0.05em",
                    lineHeight: 1.2,
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.outlet}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    color: "#444",
                  }}
                >
                  {item.date}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.15rem",
                    color: "#fff",
                    letterSpacing: "0.04em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.headline}
                </p>
                <p
                  style={{
                    color: "#666",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.excerpt}
                </p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "0.85rem",
                      letterSpacing: "0.1em",
                      color: "#FFD700",
                      textDecoration: "none",
                    }}
                  >
                    READ ARTICLE →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press contact CTA */}
      <section
        style={{
          backgroundColor: "#0d1018",
          padding: "5rem 1.5rem",
          textAlign: "center",
          borderTop: "1px solid rgba(255,215,0,0.1)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            PRESS INQUIRIES
          </h2>
          <p
            style={{
              color: "#777",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Interview requests, editorial features, playlist placements, and
            media partnerships. Reach out and let&apos;s make it happen.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#FFD700",
              color: "#080b10",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              padding: "0.9rem 2.5rem",
              textDecoration: "none",
            }}
          >
            CONTACT FOR PRESS
          </a>
        </div>
      </section>

      <EmailSignup />
    </>
  );
}
