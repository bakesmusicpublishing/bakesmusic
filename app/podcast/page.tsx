import type { Metadata } from "next";
import EmailSignup from "../components/EmailSignup";

export const metadata: Metadata = {
  title: "Podcast | Bakes | Lyrical Hip-Hop Artist San Diego",
  description: "The Bakes podcast — real talk on music, mindset, divine timing, and building your own empire. Coming soon.",
};

export default function PodcastPage() {
  return (
    <>
      <section style={{ backgroundColor: "#080b10", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "8rem 1.5rem", textAlign: "center", borderBottom: "1px solid rgba(255,215,0,0.1)" }}>
        <div style={{ maxWidth: "700px" }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.5em", color: "#FFD700", marginBottom: "1.5rem" }}>COMING SOON</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 10vw, 7rem)", color: "#fff", letterSpacing: "0.05em", lineHeight: 0.9, marginBottom: "2rem" }}>
            THE<br /><span style={{ color: "#FFD700" }}>BAKES</span><br />PODCAST
          </h1>
          <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3rem" }}>
            Real conversations about music, mindset, divine timing, and what it actually takes to build something from nothing. No fluff. No filter. Just the truth.
          </p>
          <div style={{ border: "1px solid rgba(255,215,0,0.2)", padding: "2rem", backgroundColor: "#0d1018", marginBottom: "2rem" }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#fff", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>BE THE FIRST TO KNOW</p>
            <p style={{ color: "#555", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Sign up below and we&apos;ll notify you the moment the first episode drops.</p>
          </div>
        </div>
      </section>
      <EmailSignup />
    </>
  );
}
