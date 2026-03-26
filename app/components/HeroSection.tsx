"use client";

import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  fullscreen?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage = "/images/hero.jpg",
  fullscreen = false,
}: HeroSectionProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: fullscreen ? "100vh" : "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem 4rem",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Background image with gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.95) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
        {subtitle && (
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.9rem",
              letterSpacing: "0.4em",
              color: "#FFD700",
              marginBottom: "1rem",
            }}
          >
            {subtitle}
          </p>
        )}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 12vw, 10rem)",
            lineHeight: 0.9,
            color: "#ffffff",
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              letterSpacing: "0.2em",
              color: "#AAAAAA",
              marginBottom: "2.5rem",
            }}
          >
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-gold">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-outline-gold">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
