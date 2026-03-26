"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/store", label: "Store" },
  { href: "/shows", label: "Shows" },
  { href: "/press", label: "Press" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: scrolled || mobileOpen ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,215,0,0.15)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "2rem",
            letterSpacing: "0.1em",
            color: "#FFD700",
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          BAKES
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem",
                letterSpacing: "0.12em",
                color: pathname === link.href ? "#FFD700" : "#ffffff",
                textDecoration: "none",
                transition: "color 0.2s ease",
                borderBottom: pathname === link.href ? "2px solid #FFD700" : "2px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/store"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.1em",
              backgroundColor: "#FFD700",
              color: "#080b10",
              padding: "0.5rem 1.25rem",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
          >
            SHOP NOW
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#FFD700",
              transition: "transform 0.3s ease",
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#FFD700",
              transition: "opacity 0.3s ease",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#FFD700",
              transition: "transform 0.3s ease",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "rgba(10,10,10,0.98)",
            borderTop: "1px solid rgba(255,215,0,0.2)",
            padding: "1.5rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "0.1em",
                color: pathname === link.href ? "#FFD700" : "#ffffff",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/store"
            style={{
              display: "block",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.3rem",
              letterSpacing: "0.1em",
              backgroundColor: "#FFD700",
              color: "#080b10",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            SHOP NOW
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
