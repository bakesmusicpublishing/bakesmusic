import type { Metadata } from "next";
import EmailSignup from "../components/EmailSignup";

export const metadata: Metadata = {
  title: "About Bakes | Lyrical Hip-Hop Artist San Diego | Bay Area Rapper",
  description: "Learn about Bakes — lyrical hip-hop artist from the Bay Area, based in San Diego. VEVO, GQ, The Source, HipHopWeekly, Thisis50. The story behind the music.",
};

const pressItems = [
  { outlet: "VEVO", placement: "#3 Incoming Hip-Hop Playlist", detail: "Music video for 'Divine Timing' charted on VEVO's editorial incoming hip-hop playlist, reaching listeners worldwide." },
  { outlet: "GQ Magazine", placement: "10 Songs to Sweat To", detail: "Song 'Effortless' featured in GQ's curated workout playlist, cementing Bakes as a crossover artist beyond the hip-hop lane." },
  { outlet: "The Source Magazine", placement: "Featured Artist", detail: "One of hip-hop's most storied publications recognized Bakes as an emerging voice in lyrical rap." },
  { outlet: "HipHopWeekly", placement: "Featured Coverage", detail: "In-depth coverage as an independent artist building an authentic career from the West Coast." },
  { outlet: "Thisis50", placement: "New Artist Feature", detail: "Featured on one of hip-hop's most visited platforms, exposing Bakes to millions of hip-hop fans globally." },
  { outlet: "Lord Sear", placement: "New Artist Spotlight", detail: "Highlighted by legendary New York DJ Lord Sear as a new artist worth watching." },
];

const discography = [
  { title: "Illusion", type: "Album", year: "2022" },
  { title: "Outlier", type: "Project", year: "2021" },
  { title: "Deep End", type: "Project", year: "2020" },
  { title: "Divine Timing", type: "Single / Music Video", year: "2023" },
  { title: "Effortless", type: "Single", year: "2022" },
  { title: "Complicated", type: "Single", year: "2023" },
  { title: "For a Long Time", type: "Single", year: "2023" },
  { title: "Changed", type: "Single", year: "2022" },
  { title: "My Opinion", type: "Single", year: "2022" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#080b10", padding: "8rem 1.5rem 5rem", borderBottom: "1px solid rgba(255,215,0,0.1)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.5em", color: "#FFD700", marginBottom: "1rem" }}>THE ARTIST</p>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", color: "#fff", lineHeight: 0.9, letterSpacing: "0.04em", marginBottom: "2rem" }}>
              ABOUT<br /><span style={{ color: "#FFD700" }}>BAKES</span>
            </h1>
            <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
              Bakes is a Bay Area-grown, San Diego-based lyrical hip-hop artist whose music sits at the intersection of introspection and power. With a style that carries the hunger of Northern California and the open-sky energy of the Pacific coast, Bakes has crafted a sound entirely his own.
            </p>
            <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
              His humble beginnings writing and recording out of a college apartment in 2008 have led to performances in nightclubs, festivals, and opening slots for Billboard-charting artists — a testament to the philosophy at the heart of everything he creates: <em style={{ color: "#00FFCC" }}>divine timing</em>.
            </p>
            <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.8 }}>
              Audiences describe Bakes as a modern hip-hop purist — the kind of artist who reminds you why you fell in love with the craft. Optimistic, introspective, intelligent. Building an empire one verse at a time.
            </p>
          </div>
          <div style={{ aspectRatio: "3/4", position: "relative", maxWidth: "400px", overflow: "hidden" }}>
            <img src="/images/about.jpg" alt="Bakes lyrical hip-hop artist San Diego official photo"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: "linear-gradient(180deg, #FFD700, #00FFCC)" }} />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ backgroundColor: "#111", padding: "5rem 1.5rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#FFD700", margin: "0 auto 1.5rem" }} />
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
            DIVINE TIMING
          </h2>
          <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
            Divine Timing isn&apos;t just a song or a clothing line. It&apos;s a way of operating in the world. It&apos;s the belief that your path is unfolding exactly as it should — that every detour, every slow period, every moment of doubt is part of the design.
          </p>
          <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.9 }}>
            Bakes built his career on this truth. Starting from scratch, building without shortcuts, releasing music that speaks to people who are also in the process of becoming. The result is an artist — and a brand — rooted in authenticity.
          </p>
        </div>
      </section>

      {/* Press */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ width: "40px", height: "3px", backgroundColor: "#FFD700", marginBottom: "1.5rem" }} />
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", letterSpacing: "0.08em", marginBottom: "3rem" }}>
          AS SEEN IN
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", backgroundColor: "#1a1a1a" }}>
          {pressItems.map((item) => (
            <div key={item.outlet} style={{ backgroundColor: "#111", padding: "2rem", borderLeft: "3px solid #FFD700" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#FFD700", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>{item.outlet}</p>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "#fff", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>{item.placement}</p>
              <p style={{ color: "#777", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discography */}
      <section style={{ backgroundColor: "#111", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#FFD700", marginBottom: "1.5rem" }} />
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", letterSpacing: "0.08em", marginBottom: "3rem" }}>DISCOGRAPHY</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {discography.map((item) => (
              <div key={item.title} style={{ backgroundColor: "#080b10", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#fff", letterSpacing: "0.05em" }}>{item.title}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#555" }}>{item.type}</p>
                </div>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#FFD700" }}>{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmailSignup />
    </>
  );
}
