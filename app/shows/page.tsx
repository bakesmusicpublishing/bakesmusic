"use client";
import { useState } from "react";
import EmailSignup from "../components/EmailSignup";

const pastShows = [
  {
    date: "Feb 2024",
    venue: "San Diego, CA",
    event: "Opened for Demrick",
    detail: "Supporting slot for West Coast hip-hop veteran Demrick — an evening of lyrical hip-hop that packed the venue.",
  },
  {
    date: "Nov 2023",
    venue: "San Diego, CA",
    event: "Day of the Dead Festival",
    detail: "Live performance at San Diego's Day of the Dead festival, bringing the Divine Timing energy to a packed crowd.",
  },
];

// Scaffold: add real upcoming shows here when booked
const upcomingShows: {
  id: string;
  date: string;
  city: string;
  venue: string;
  ticketUrl?: string; // external (Eventbrite, etc.)
  stripeEnabled?: boolean; // use built-in ticket checkout
  price?: number;
}[] = [
  // Example (uncomment when you have shows):
  // {
  //   id: "show-001",
  //   date: "April 15, 2026",
  //   city: "San Diego, CA",
  //   venue: "Venue Name",
  //   stripeEnabled: true,
  //   price: 15,
  // },
];

function TicketModal({
  show,
  onClose,
}: {
  show: (typeof upcomingShows)[0];
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", quantity: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    if (!form.name || !form.email) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: Array.from({ length: form.quantity }, () => ({
            name: `Ticket — ${show.venue} (${show.date})`,
            price: show.price || 0,
            size: "GA",
            quantity: 1,
            metadata: { type: "ticket", name: form.name, email: form.email },
          })),
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setError("Checkout failed — please try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
      <div
        onClick={onClose}
        style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.8)" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#111",
          padding: "3rem",
          width: "min(480px, 90vw)",
          zIndex: 201,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
          <div>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", letterSpacing: "0.3em", color: "#FFD700", marginBottom: "0.4rem" }}>
              GET TICKETS
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#fff", letterSpacing: "0.05em", lineHeight: 1 }}>
              {show.venue}
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#666", marginTop: "0.25rem" }}>
              {show.date} · {show.city}
            </p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#555", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
        </div>

        {error && (
          <p style={{ backgroundColor: "#2a1010", color: "#ff6b6b", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", padding: "0.75rem 1rem", marginBottom: "1.5rem" }}>
            {error}
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", padding: "0.85rem 1rem", outline: "none" }}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", padding: "0.85rem 1rem", outline: "none" }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <label style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "#aaa", letterSpacing: "0.08em" }}>
              QUANTITY
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                onClick={() => setForm({ ...form, quantity: Math.max(1, form.quantity - 1) })}
                style={{ width: "36px", height: "36px", backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#fff", fontSize: "1.2rem", cursor: "pointer" }}
              >−</button>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#fff", minWidth: "1.5rem", textAlign: "center" }}>
                {form.quantity}
              </span>
              <button
                onClick={() => setForm({ ...form, quantity: Math.min(10, form.quantity + 1) })}
                style={{ width: "36px", height: "36px", backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#fff", fontSize: "1.2rem", cursor: "pointer" }}
              >+</button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #222", paddingTop: "1rem", marginBottom: "1.5rem", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#aaa", letterSpacing: "0.05em" }}>TOTAL</span>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#FFD700" }}>
            ${((show.price || 0) * form.quantity).toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          style={{
            width: "100%",
            backgroundColor: loading ? "#7a6500" : "#FFD700",
            color: "#080b10",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.2rem",
            letterSpacing: "0.1em",
            padding: "1rem",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "PROCESSING..." : `PURCHASE ${form.quantity > 1 ? `${form.quantity} ` : ""}TICKET${form.quantity > 1 ? "S" : ""}`}
        </button>
      </div>
    </div>
  );
}

export default function ShowsPage() {
  const [ticketModal, setTicketModal] = useState<(typeof upcomingShows)[0] | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#080b10",
          padding: "8rem 1.5rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,215,0,0.1)",
        }}
      >
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.5em", color: "#FFD700", marginBottom: "1rem" }}>
          LIVE
        </p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 10vw, 8rem)", color: "#fff", letterSpacing: "0.05em", lineHeight: 0.9 }}>
          SHOWS
        </h1>
      </section>

      {/* Upcoming */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ width: "40px", height: "3px", backgroundColor: "#FFD700", marginBottom: "1.5rem" }} />
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", letterSpacing: "0.08em", marginBottom: "2rem" }}>
          UPCOMING SHOWS
        </h2>

        {upcomingShows.length === 0 ? (
          <div style={{ border: "1px solid rgba(255,215,0,0.2)", padding: "3rem 2rem", textAlign: "center", backgroundColor: "#111" }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#aaa", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              NO UPCOMING SHOWS
            </p>
            <p style={{ color: "#555", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", marginBottom: "2rem" }}>
              Follow on Instagram and sign up below to be first to know when shows are announced.
            </p>
            <a
              href="https://instagram.com/bakes.music.official"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#FFD700",
                color: "#080b10",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                padding: "0.85rem 2.5rem",
                textDecoration: "none",
              }}
            >
              FOLLOW ON INSTAGRAM
            </a>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#1a1a1a" }}>
            {upcomingShows.map((show) => (
              <div
                key={show.id}
                style={{
                  backgroundColor: "#111",
                  padding: "1.5rem 2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "1.5rem", alignItems: "center" }}>
                  <div>
                    <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#FFD700", letterSpacing: "0.05em" }}>{show.date}</p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#555" }}>{show.city}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#fff", letterSpacing: "0.05em", marginBottom: "0.15rem" }}>{show.venue}</p>
                    {show.price && (
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#555" }}>from ${show.price}</p>
                    )}
                  </div>
                </div>
                {show.ticketUrl ? (
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#FFD700",
                      color: "#080b10",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1rem",
                      letterSpacing: "0.1em",
                      padding: "0.6rem 1.5rem",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    GET TICKETS
                  </a>
                ) : show.stripeEnabled ? (
                  <button
                    onClick={() => setTicketModal(show)}
                    style={{
                      backgroundColor: "#FFD700",
                      color: "#080b10",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1rem",
                      letterSpacing: "0.1em",
                      padding: "0.6rem 1.5rem",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    GET TICKETS
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Past shows */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
        <div style={{ width: "40px", height: "3px", backgroundColor: "#333", marginBottom: "1.5rem" }} />
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "#555", letterSpacing: "0.08em", marginBottom: "2rem" }}>
          PAST SHOWS
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "#1a1a1a" }}>
          {pastShows.map((show, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#111",
                padding: "1.5rem 2rem",
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "1.5rem",
                alignItems: "center",
              }}
            >
              <div>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#555", letterSpacing: "0.05em" }}>{show.date}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#333" }}>{show.venue}</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#555", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>{show.event}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#444" }}>{show.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section style={{ backgroundColor: "#0d1018", padding: "5rem 1.5rem", textAlign: "center", borderTop: "1px solid rgba(255,215,0,0.1)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", letterSpacing: "0.08em", marginBottom: "1rem" }}>
            BOOK BAKES
          </h2>
          <p style={{ color: "#777", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            For festival appearances, club bookings, corporate events, and opening slots — reach out through the contact form.
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
            BOOKING INQUIRY
          </a>
        </div>
      </section>

      <EmailSignup />

      {ticketModal && (
        <TicketModal show={ticketModal} onClose={() => setTicketModal(null)} />
      )}
    </>
  );
}
