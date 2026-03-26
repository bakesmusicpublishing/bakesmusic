"use client";
import { useState } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section style={{ backgroundColor: "#0a0a0a", padding: "8rem 1.5rem 4rem", textAlign: "center", borderBottom: "1px solid rgba(255,215,0,0.1)" }}>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.5em", color: "#FFD700", marginBottom: "1rem" }}>GET IN TOUCH</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 10vw, 8rem)", color: "#fff", letterSpacing: "0.05em", lineHeight: 0.9 }}>CONTACT</h1>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem" }}>
        {/* Info */}
        <div>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#FFD700", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>BOOKING</h2>
            <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
              For show bookings, festival appearances, and live performance inquiries, use the form and select &ldquo;Booking&rdquo; as the subject.
            </p>
          </div>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#FFD700", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>PRESS & MEDIA</h2>
            <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Interview requests, press features, editorial placements, and media inquiries are welcome.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#FFD700", letterSpacing: "0.08em", marginBottom: "1rem" }}>SOCIALS</h2>
            {[
              { name: "Instagram", handle: "@bakesmusic", url: "https://instagram.com/bakesmusic" },
              { name: "Spotify", handle: "Bakes", url: "#" },
              { name: "YouTube", handle: "Bakes Music", url: "#" },
              { name: "Twitter/X", handle: "@bakesmusic", url: "#" },
            ].map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}>
                <span style={{ color: "#555", marginRight: "0.5rem" }}>{s.name}:</span>{s.handle}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div style={{ backgroundColor: "#111", padding: "3rem", textAlign: "center" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#FFD700", letterSpacing: "0.08em", marginBottom: "1rem" }}>MESSAGE SENT</p>
              <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif" }}>Thanks for reaching out. We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { label: "NAME", key: "name", type: "text", placeholder: "Your name" },
                { label: "EMAIL", key: "email", type: "email", placeholder: "your@email.com" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.2em", color: "#666", display: "block", marginBottom: "0.4rem" }}>{label}</label>
                  <input type={type} required placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={{ width: "100%", backgroundColor: "#111", border: "1px solid #222", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", padding: "0.85rem 1rem", outline: "none", boxSizing: "border-box" }} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.2em", color: "#666", display: "block", marginBottom: "0.4rem" }}>SUBJECT</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{ width: "100%", backgroundColor: "#111", border: "1px solid #222", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", padding: "0.85rem 1rem", outline: "none" }}>
                  <option value="general">General</option>
                  <option value="booking">Booking / Shows</option>
                  <option value="press">Press / Media</option>
                  <option value="collab">Collaboration</option>
                  <option value="merch">Merch / Orders</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.2em", color: "#666", display: "block", marginBottom: "0.4rem" }}>MESSAGE</label>
                <textarea required placeholder="Your message..." rows={6}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: "100%", backgroundColor: "#111", border: "1px solid #222", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", padding: "0.85rem 1rem", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="submit"
                style={{ backgroundColor: "#FFD700", color: "#0a0a0a", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.1em", padding: "1rem", border: "none", cursor: "pointer" }}>
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
