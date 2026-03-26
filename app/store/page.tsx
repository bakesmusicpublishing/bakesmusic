"use client";
import { useState } from "react";
import { products } from "../data/products";
import type { Product } from "../data/products";

export default function StorePage() {
  const [cart, setCart] = useState<{ product: Product; size: string; price: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [customPrices, setCustomPrices] = useState<Record<string, number>>({});
  const [priceErrors, setPriceErrors] = useState<Record<string, string>>({});

  function addToCart(product: Product) {
    const size = selectedSizes[product.id];
    const price = customPrices[product.id] ?? product.price;
    if (!size) { alert("Please select a size"); return; }
    if (price < product.price) {
      setPriceErrors({ ...priceErrors, [product.id]: `Minimum price is $${product.price}` });
      return;
    }
    setPriceErrors({ ...priceErrors, [product.id]: "" });
    setCart([...cart, { product, size, price }]);
    setCartOpen(true);
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Cart sidebar */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100 }}>
          <div
            onClick={() => setCartOpen(false)}
            style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }}
          />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "min(400px, 100vw)",
            backgroundColor: "#111", padding: "2rem", overflowY: "auto", zIndex: 101,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#fff", letterSpacing: "0.08em" }}>
                CART ({cart.length})
              </h2>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
            </div>
            {cart.length === 0 ? (
              <p style={{ color: "#555", fontFamily: "Inter, sans-serif" }}>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item, i) => (
                  <div key={i} style={{ borderBottom: "1px solid #222", paddingBottom: "1rem", marginBottom: "1rem" }}>
                    <p style={{ color: "#fff", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.05em" }}>{item.product.name}</p>
                    <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>Size: {item.size} · ${item.price}</p>
                    <button onClick={() => setCart(cart.filter((_, j) => j !== i))}
                      style={{ background: "none", border: "none", color: "#555", fontFamily: "Inter, sans-serif", fontSize: "0.75rem", cursor: "pointer", padding: 0, marginTop: "0.25rem" }}>
                      Remove
                    </button>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #FFD700", paddingTop: "1rem", marginTop: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#fff", letterSpacing: "0.05em" }}>TOTAL</span>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#FFD700" }}>${cartTotal}</span>
                  </div>
                  <button
                    style={{ width: "100%", backgroundColor: "#FFD700", color: "#080b10", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.1em", padding: "1rem", border: "none", cursor: "pointer" }}
                    onClick={async () => {
                    if (cart.length === 0) return;
                    const res = await fetch("/api/checkout", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ items: cart.map(i => ({ name: i.product.name, price: i.price, size: i.size, quantity: 1 })) })
                    });
                    const data = await res.json();
                    if (data.url) window.location.href = data.url;
                    else alert("Checkout error — try again");
                  }}
                  >
                    CHECKOUT
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero */}
      <section style={{ backgroundColor: "#080b10", padding: "8rem 1.5rem 4rem", textAlign: "center", borderBottom: "1px solid rgba(255,215,0,0.1)" }}>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.5em", color: "#FFD700", marginBottom: "1rem" }}>BAKES CLOTHING</p>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#888", marginBottom: "0.5rem" }}>CAPSULE 001</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 10vw, 8rem)", color: "#fff", letterSpacing: "0.05em", lineHeight: 0.9, marginBottom: "1rem" }}>
          DIVINE<br /><span style={{ color: "#FFD700" }}>TIMING</span>
        </h1>
        <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
          Capsule 001. Five pieces. One philosophy. Wear the timing.
        </p>
        {cart.length > 0 && (
          <button onClick={() => setCartOpen(true)}
            style={{ backgroundColor: "#FFD700", color: "#080b10", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em", padding: "0.75rem 2rem", border: "none", cursor: "pointer" }}>
            VIEW CART ({cart.length})
          </button>
        )}
      </section>

      {/* Products */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
          {products.map((product) => (
            <div key={product.id} style={{ backgroundColor: "#111", display: "flex", flexDirection: "column" }}>
              {/* Image */}
              <div style={{ aspectRatio: "1", backgroundColor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "#2a2a2a", letterSpacing: "0.3em" }}>DIVINE TIMING</div>
                <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: "#FFD700", color: "#080b10", fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", padding: "0.2rem 0.6rem" }}>
                  ${product.price}+
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#fff", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>{product.name}</h2>
                <p style={{ color: "#888", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.25rem", flex: 1 }}>{product.description}</p>

                {/* Size selector */}
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", letterSpacing: "0.2em", color: "#666", marginBottom: "0.5rem" }}>SIZE</p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {product.sizes.map((size) => (
                      <button key={size} onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: size })}
                        style={{
                          width: "40px", height: "40px", border: selectedSizes[product.id] === size ? "2px solid #FFD700" : "1px solid #333",
                          backgroundColor: selectedSizes[product.id] === size ? "rgba(255,215,0,0.1)" : "transparent",
                          color: selectedSizes[product.id] === size ? "#FFD700" : "#666",
                          fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.9rem", cursor: "pointer",
                        }}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name your price */}
                <div style={{ marginBottom: "0.75rem" }}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", letterSpacing: "0.2em", color: "#666", marginBottom: "0.5rem" }}>
                    YOUR PRICE (min ${product.price})
                  </p>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid #333", backgroundColor: "#080b10" }}>
                    <span style={{ padding: "0 0.75rem", color: "#FFD700", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>$</span>
                    <input
                      type="number"
                      min={product.price}
                      defaultValue={product.price}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setCustomPrices({ ...customPrices, [product.id]: val });
                        if (val < product.price) {
                          setPriceErrors({ ...priceErrors, [product.id]: `Min $${product.price}` });
                        } else {
                          setPriceErrors({ ...priceErrors, [product.id]: "" });
                        }
                      }}
                      style={{ background: "none", border: "none", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "1rem", padding: "0.6rem 0.5rem", width: "100%", outline: "none" }}
                    />
                  </div>
                  {priceErrors[product.id] && (
                    <p style={{ color: "#ff4444", fontFamily: "Inter, sans-serif", fontSize: "0.75rem", marginTop: "0.25rem" }}>{priceErrors[product.id]}</p>
                  )}
                </div>

                <button onClick={() => addToCart(product)}
                  style={{ width: "100%", backgroundColor: "#FFD700", color: "#080b10", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.1em", padding: "0.85rem", border: "none", cursor: "pointer", marginTop: "auto" }}>
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy section */}
      <section style={{ backgroundColor: "#111", padding: "5rem 1.5rem", textAlign: "center", borderTop: "1px solid rgba(255,215,0,0.1)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem", letterSpacing: "0.5em", color: "#FFD700", marginBottom: "1.5rem" }}>BAKES CLOTHING</p>
          <blockquote style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.2, letterSpacing: "0.04em", marginBottom: "1rem" }}>
            &ldquo;EMBRACE THE JOURNEY.<br />
            TRUST IN <span style={{ color: "#FFD700" }}>SYNCHRONICITIES</span>.<br />
            EVERYTHING HAPPENS<br />
            EXACTLY WHEN IT&apos;S MEANT TO BE.&rdquo;
          </blockquote>
          <p style={{ color: "#555", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em" }}>— BAKES</p>
        </div>
      </section>
    </>
  );
}
