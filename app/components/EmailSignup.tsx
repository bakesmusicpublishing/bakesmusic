"use client";

import { useState } from "react";

interface EmailSignupProps {
  dark?: boolean;
  title?: string;
  subtitle?: string;
}

export default function EmailSignup({
  dark = true,
  title = "JOIN THE MOVEMENT",
  subtitle = "New music, merch drops, exclusive content, and show announcements — direct to your inbox.",
}: EmailSignupProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Signup error:", data.error);
        setSubmitted(true); // still show success to user
      }
    } catch {
      setSubmitted(true); // graceful fallback
    }
    setLoading(false);
    setName("");
    setEmail("");
  };

  const bg = dark ? "#111111" : "#1a1a1a";
  const inputBg = dark ? "#1a1a1a" : "#080b10";

  return (
    <section
      style={{
        backgroundColor: bg,
        padding: "5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
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
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#ffffff",
            marginBottom: "0.75rem",
            letterSpacing: "0.08em",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "#AAAAAA",
            fontSize: "1rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {subtitle}
        </p>

        {submitted ? (
          <div
            style={{
              border: "2px solid #00FFCC",
              padding: "2rem",
              backgroundColor: "rgba(0,255,204,0.05)",
            }}
          >
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.8rem",
                color: "#00FFCC",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              ✓ YOU&apos;RE IN
            </p>
            <p style={{ color: "#AAAAAA", fontFamily: "Inter, sans-serif", fontSize: "0.95rem" }}>
              Welcome to the movement. Divine timing is real — stay ready.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <input
              type="text"
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                backgroundColor: inputBg,
                border: "1px solid rgba(255,215,0,0.25)",
                color: "#ffffff",
                padding: "1rem 1.25rem",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#FFD700")}
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor = "rgba(255,215,0,0.25)")
              }
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                backgroundColor: inputBg,
                border: "1px solid rgba(255,215,0,0.25)",
                color: "#ffffff",
                padding: "1rem 1.25rem",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#FFD700")}
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor = "rgba(255,215,0,0.25)")
              }
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: loading ? "#888" : "#FFD700",
                color: "#080b10",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                letterSpacing: "0.12em",
                padding: "1rem 2rem",
                border: "none",
                cursor: loading ? "wait" : "pointer",
                transition: "background-color 0.2s ease, transform 0.1s ease",
              }}
              onMouseEnter={(e) => {
                if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = "#e6c200";
              }}
              onMouseLeave={(e) => {
                if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = "#FFD700";
              }}
            >
              {loading ? "JOINING..." : "JOIN THE MOVEMENT"}
            </button>
            <p style={{ color: "#555", fontSize: "0.75rem", fontFamily: "Inter, sans-serif" }}>
              No spam. Unsubscribe anytime. Your info stays private.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
