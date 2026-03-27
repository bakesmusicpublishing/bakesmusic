"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/music", label: "Music" },
  { href: "/blog", label: "Blog" },
  { href: "/store", label: "Store" },
  { href: "/shows", label: "Shows" },
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/bakesmusic",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/channel/UCnt19v71q2ayun3cgMz3Bpg",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    name: "Twitter/X",
    href: "https://twitter.com/bakesmusic",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@bakesmusic",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Footer newsletter signup:", { name, email });
    setName("");
    setEmail("");
    setSubmitted(true);
  };

  return (
    <footer style={{ backgroundColor: "#0a0a0a", padding: "4rem 1.5rem 2rem" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <div>
          <Link href="/" style={{ textDecoration: "none" }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.5rem",
                color: "#FFD700",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              BAKES
            </h2>
          </Link>
          <p style={{ color: "#AAAAAA", fontSize: "0.9rem", fontFamily: "Inter, sans-serif" }}>
            San Diego lyrical hip‑hop artist.<br />
            Divine timing. Real talk.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.12em",
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            NAVIGATE
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.label} style={{ marginBottom: "0.5rem" }}>
                <Link
                  href={link.href}
                  style={{
                    color: "#AAAAAA",
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#FFD700";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#AAAAAA";
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.12em",
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            CONNECT
          </h4>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{
                  color: "#AAAAAA",
                  transition: "color 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#FFD700")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#AAAAAA")
                }
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.12em",
              color: "#FFD700",
              marginBottom: "0.5rem",
            }}
          >
            JOIN THE MOVEMENT
          </h3>
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "0.85rem",
              marginBottom: "1rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            New music, merch drops, and show announcements.
          </p>
          {submitted ? (
            <p
              style={{
                color: "#00FFCC",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem",
              }}
            >
              ✓ YOU’RE IN. DIVINE TIMING.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
            >
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,215,0,0.3)",
                  color: "#ffffff",
                  padding: "0.6rem 0.9rem",
                  fontSize: "0.9rem",
                  fontFamily: "Inter, sans-serif",
                  outline: "none",
                  width: "100%",
                }}
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,215,0,0.3)",
                  color: "#ffffff",
                  padding: "0.6rem 0.9rem",
                  fontSize: "0.9rem",
                  fontFamily: "Inter, sans-serif",
                  outline: "none",
                  width: "100%",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#080b10",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  padding: "0.65rem 1rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  width: "100%",
                }}
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer AdSense */}
      <div style={{ padding: "1.5rem 0" }}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8745120722611220"
          crossorigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            margin: "0 auto",
            minWidth: "336px",
            width: "100%",
          }}
          data-ad-client="ca-pub-8745120722611220"
          data-ad-slot="7098661006"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#555555", fontSize: "0.8rem", fontFamily: "Inter, sans-serif" }}>
          © 2026 Bakes. All rights reserved.
        </p>
        <p
          style={{
            color: "#333333",
            fontSize: "0.75rem",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.2em",
          }}
        >
          DIVINE TIMING
        </p>
      </div>
    </footer>
  );
}
