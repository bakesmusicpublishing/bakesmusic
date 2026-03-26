"use client";

import { useState, useEffect } from "react";

export default function EmailCapture() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds and only once per session
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("emailPopupSeen")) {
        setShow(true);
        sessionStorage.setItem("emailPopupSeen", "true");
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handleClose = () => setShow(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg max-w-md w-full p-6 relative" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFD700' }}>Divine Timing — Free Beats</h3>
        <p className="mb-4 text-gray-300">
          Join the inner circle. Get a free pack of 5 exclusive beats when you sign up for the newsletter.
        </p>
        <form
          action="/api/subscribe"
          method="POST"
          className="space-y-3"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 rounded font-semibold transition"
            style={{ backgroundColor: '#FFD700', color: '#000' }}
          >
            Send Me the Free Pack
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500 text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
