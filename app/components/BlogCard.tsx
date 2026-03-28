import Link from "next/link";
import type { Post } from "../data/posts";

interface BlogCardProps {
  post: Post;
  variant?: "default" | "featured";
}

export default function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryColors: Record<string, string> = {
    "Music Career": "#FFD700",
    "Personal Growth": "#00FFCC",
    "Hip-Hop Culture": "#FF6B6B",
    "Divine Timing": "#C084FC",
  };

  const catColor = categoryColors[post.category] || "#FFD700";

  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        style={{
          display: "block",
          backgroundColor: "#111111",
          textDecoration: "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        className="card-hover"
      >
        {/* Thumbnail image */}
        <div
          style={{
            width: "100%",
            height: "220px",
            backgroundColor: "#1a1a1a",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={post.image || "/images/gallery/bakes-professional-photoshoot-lyrical-hiphop-artist-001.jpg"}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.8) 100%)",
            }}
          />
          {/* Category badge */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              backgroundColor: catColor,
              color: "#0a0a0a",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              padding: "0.2rem 0.5rem",
              fontWeight: 700,
            }}
          >
            {post.category}
          </div>
        </div>

        <div style={{ padding: "1.5rem" }}>
          <p
            style={{
              color: "#555",
              fontSize: "0.75rem",
              fontFamily: "Inter, sans-serif",
              marginBottom: "0.5rem",
              letterSpacing: "0.05em",
            }}
          >
            {formattedDate}
          </p>
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.4rem",
              color: "#ffffff",
              letterSpacing: "0.05em",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            {post.title}
          </h3>
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              fontFamily: "Inter, sans-serif",
              marginBottom: "1rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </p>
          <span
            style={{
              color: "#FFD700",
              fontSize: "0.8rem",
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            READ MORE →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1.25rem",
        backgroundColor: "#111111",
        textDecoration: "none",
        transition: "background-color 0.2s ease",
        borderLeft: `3px solid ${catColor}`,
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.backgroundColor = "#1a1a1a")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.backgroundColor = "#111111")
      }
    >
      {/* Thumbnail */}
      {post.image && (
        <div style={{ width: "120px", minWidth: "120px", height: "80px", overflow: "hidden", borderRadius: "4px", flexShrink: 0 }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }}
          />
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            marginBottom: "0.4rem",
          }}
        >
          <span
            style={{
              color: catColor,
              fontSize: "0.7rem",
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.12em",
            }}
          >
            {post.category}
          </span>
          <span style={{ color: "#333", fontSize: "0.7rem" }}>•</span>
          <span
            style={{
              color: "#555",
              fontSize: "0.75rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {formattedDate}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
            color: "#ffffff",
            letterSpacing: "0.05em",
            lineHeight: 1.25,
            marginBottom: "0.4rem",
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            color: "#777",
            fontSize: "0.82rem",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
