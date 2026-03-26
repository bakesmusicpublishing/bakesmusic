import type { Metadata } from "next";
import EmailSignup from "../components/EmailSignup";

export const metadata: Metadata = {
  title: "Music | Bakes | Lyrical Hip-Hop Artist San Diego",
  description: "Stream Bakes' music on Spotify, Apple Music, YouTube and Tidal. Lyrical hip-hop from San Diego. Featured on VEVO, GQ, The Source.",
};

const releases = [
  { title: "Illusion", type: "Album", year: "2022", tracks: ["Illusion", "Outlier", "Deep End"], description: "A body of work exploring perception, reality, and self. The project that put Bakes on the map." },
  { title: "Divine Timing", type: "Single + Video", year: "2023", description: "#3 on VEVO's Incoming Hip-Hop playlist. The anthem that defines the brand." },
  { title: "Effortless", type: "Single", year: "2022", description: "Featured in GQ's '10 Songs to Sweat To'. Smooth, confident, undeniable." },
  { title: "Complicated", type: "Single", year: "2023", description: "Introspective look at modern relationships and the complexity of growth." },
  { title: "For a Long Time", type: "Single", year: "2023", description: "Patient energy. Built for the ones playing the long game." },
  { title: "Changed", type: "Single", year: "2022", description: "Personal evolution captured in bars. A fan favorite." },
  { title: "My Opinion", type: "Single", year: "2022", description: "Unapologetic perspective. Bakes at his most direct." },
];

const streamingLinks = [
  { name: "Spotify", color: "#1DB954", url: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm", icon: "S" },
  { name: "Apple Music", color: "#FC3C44", url: "https://music.apple.com/us/artist/bakes/81078252", icon: "A" },
  { name: "YouTube Music", color: "#FF0000", url: "https://youtube.com/channel/UCnt19v71q2ayun3cgMz3Bpg", icon: "Y" },
  { name: "Tidal", color: "#00FFFF", url: "https://tidal.com/browse/artist/8239871", icon: "T" },
  { name: "SoundCloud", color: "#FF5500", url: "https://soundcloud.com/bakesmusic", icon: "SC" },
];

export default function MusicPage() {
  return (
    <>
      <section style={{ backgroundColor: "#080b10", padding: "8rem 1.5rem 5rem", borderBottom: "1px solid rgba(255,215,0,0.1)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.5em", color: "#FFD700", marginBottom: "1rem" }}>DISCOGRAPHY</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 10vw, 8rem)", color: "#fff", letterSpacing: "0.05em", lineHeight: 0.9, marginBottom: "3rem" }}>MUSIC</h1>

          {/* Streaming links */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {streamingLinks.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", backgroundColor: "#111", border: "1px solid #222", padding: "0.85rem 1.5rem", textDecoration: "none", transition: "border-color 0.2s" }}>
                <div style={{ width: "32px", height: "32px", backgroundColor: s.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", color: "#fff", flexShrink: 0 }}>
                  {s.icon}
                </div>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.08em", color: "#fff" }}>
                  {s.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify embed */}
      <section style={{ backgroundColor: "#111", padding: "4rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#FFD700", marginBottom: "1.5rem" }} />
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 4vw, 3rem)", color: "#fff", letterSpacing: "0.08em", marginBottom: "2rem" }}>STREAM NOW</h2>
          {/* Real Spotify embed */}
          <iframe
            style={{ borderRadius: "12px", border: "none", display: "block" }}
            src="https://open.spotify.com/embed/artist/4syNtiG715ZmiLemlyR8Sm?utm_source=generator"
            width="100%"
            height="380"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Bakes on Spotify - Lyrical Hip-Hop Artist San Diego"
          />
        </div>
      </section>

      {/* Releases grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ width: "40px", height: "3px", backgroundColor: "#FFD700", marginBottom: "1.5rem" }} />
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", letterSpacing: "0.08em", marginBottom: "3rem" }}>RELEASES</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {releases.map((r) => (
            <div key={r.title} style={{ backgroundColor: "#111", padding: "0" }}>
              <div style={{ aspectRatio: "1", backgroundColor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#2a2a2a", letterSpacing: "0.2em", textAlign: "center", padding: "1rem" }}>{r.title}</p>
                <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", backgroundColor: "#FFD700", color: "#080b10", fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", padding: "0.2rem 0.6rem" }}>{r.year}</div>
                <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", backgroundColor: "rgba(0,0,0,0.6)", color: "#aaa", fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", padding: "0.2rem 0.5rem" }}>{r.type}</div>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#fff", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>{r.title}</h3>
                <p style={{ color: "#777", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", lineHeight: 1.6 }}>{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Music Video section */}
      <section style={{ backgroundColor: "#111", padding: "5rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#FFD700", marginBottom: "1.5rem" }} />
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", letterSpacing: "0.08em", marginBottom: "2rem" }}>MUSIC VIDEOS</h2>
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
              src="https://www.youtube.com/embed/psXYd7-4xqc"
              title="Bakes - Divine Timing (Official Music Video)"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "#FFD700", letterSpacing: "0.1em", marginTop: "1rem", textAlign: "center" }}>
            DIVINE TIMING — OFFICIAL MUSIC VIDEO
          </p>
        </div>
      </section>

      <EmailSignup />
    </>
  );
}
