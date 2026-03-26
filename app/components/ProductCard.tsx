"use client";

import { useState } from "react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, size: string, quantity: number, price: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [customPrice, setCustomPrice] = useState<string>(String(product.price));
  const [added, setAdded] = useState(false);
  const [error, setError] = useState<string>("");

  const effectivePrice = parseFloat(customPrice) || product.price;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size");
      return;
    }
    if (effectivePrice < product.price) {
      setError(`Minimum price is $${product.price}`);
      return;
    }
    setError("");
    if (onAddToCart) {
      onAddToCart(product, selectedSize, 1, effectivePrice);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: "#111111",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      className="card-hover"
    >
      {/* Product image */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          backgroundColor: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Real product image */}
        <img
          src={product.image}
          alt={`${product.name} - Bakes Divine Timing Hip-Hop Streetwear`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
          }}
        />
        <div
          style={{
            display: "none",
            position: "absolute", inset: 0,
            alignItems: "center", justifyContent: "center",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.2rem", color: "#2a2a2a", letterSpacing: "0.3em", textAlign: "center",
          }}
        >DIVINE<br />TIMING</div>
        {/* Price badge */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "#FFD700",
            color: "#0a0a0a",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            padding: "0.25rem 0.6rem",
          }}
        >
          ${product.price}
        </div>
      </div>

      {/* Product info */}
      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "0.75rem",
        }}
      >
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.3rem",
            color: "#ffffff",
            letterSpacing: "0.06em",
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            color: "#777",
            fontSize: "0.82rem",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {product.description}
        </p>

        {/* Size selector */}
        <div>
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "0.75rem",
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.1em",
              marginBottom: "0.5rem",
            }}
          >
            SIZE
          </p>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  width: "38px",
                  height: "38px",
                  border: selectedSize === size ? "2px solid #FFD700" : "1px solid #333",
                  backgroundColor: selectedSize === size ? "#FFD700" : "transparent",
                  color: selectedSize === size ? "#0a0a0a" : "#AAAAAA",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  transition: "all 0.15s ease",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Name your price */}
        <div>
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "0.75rem",
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.1em",
              marginBottom: "0.5rem",
            }}
          >
            NAME YOUR PRICE (min ${product.price})
          </p>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <span
              style={{
                position: "absolute",
                left: "0.75rem",
                color: "#FFD700",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1rem",
              }}
            >
              $
            </span>
            <input
              type="number"
              min={product.price}
              value={customPrice}
              onChange={(e) => {
                setCustomPrice(e.target.value);
                setError("");
              }}
              style={{
                width: "100%",
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,215,0,0.3)",
                color: "#ffffff",
                padding: "0.6rem 0.75rem 0.6rem 2rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        {error && (
          <p
            style={{
              color: "#FF6B6B",
              fontSize: "0.8rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {error}
          </p>
        )}

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: added ? "#00FFCC" : "#FFD700",
            color: "#0a0a0a",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            padding: "0.85rem",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s ease",
            marginTop: "auto",
          }}
        >
          {added ? "✓ ADDED TO CART" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
}
