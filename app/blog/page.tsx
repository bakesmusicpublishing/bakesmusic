import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import BlogCard from "../components/BlogCard";
import EmailSignup from "../components/EmailSignup";
import { posts } from "../data/posts";

export const metadata: Metadata = {
  title: "Blog | Bakes | Music Career, Personal Growth, Hip-Hop Culture",
  description:
    "The official Bakes blog — real talk on music careers, personal growth, hip-hop culture, and divine timing. Written by San Diego lyrical hip-hop artist Bakes.",
  openGraph: {
    title: "Blog | Bakes | Music Career, Personal Growth, Hip-Hop Culture",
    description:
      "Real talk on music careers, personal growth, hip-hop culture, and divine timing.",
    url: "https://bakesmusic.com/blog",
  },
};

const categories = ["All", "Music Career", "Personal Growth", "Hip-Hop Culture", "Divine Timing"];

const categoryColors: Record<string, string> = {
  "Music Career": "#FFD700",
  "Personal Growth": "#00FFCC",
  "Hip-Hop Culture": "#FF6B6B",
  "Divine Timing": "#C084FC",
};

const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function BlogPage() {
  const featuredPost = sortedPosts[0];
  const restPosts = sortedPosts.slice(1);

  return (
    <>
      <HeroSection title="BLOG" subtitle="WORDS FROM BAKES" description="MUSIC · GROWTH · CULTURE · DIVINE TIMING" />

      {/* Category filter — static labels (filtering would need client component) */}
      <section
        style={{
          backgroundColor: "#111111",
          padding: "1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          overflowX: "auto",
        }}
      >
        <div className="filter-scroll"
          style={{
            display: "flex",
            gap: "0.75rem",
            maxWidth: "1280px",
            margin: "0 auto",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <span
              key={cat}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                padding: "0.4rem 1rem",
                border: `1px solid ${cat === "All" ? "#FFD700" : "rgba(255,255,255,0.1)"}`,
                color: cat === "All" ? "#FFD700" : "#AAAAAA",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "4rem 1.5rem 2rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.4em",
              color: "#FFD700",
              marginBottom: "1.5rem",
            }}
          >
            LATEST POST
          </p>
          <Link
            href={`/blog/${featuredPost.slug}`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "0",
              backgroundColor: "#111111",
              textDecoration: "none",
              transition: "box-shadow 0.3s ease",
            }}
            className="card-hover"
          >
            {/* Image */}
            <div
              style={{
                backgroundColor: "#1a1a1a",
                minHeight: "320px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "3rem",
                  color: "#2a2a2a",
                  letterSpacing: "0.2em",
                }}
              >
                BAKES
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  backgroundColor:
                    categoryColors[featuredPost.category] || "#FFD700",
                  color: "#080b10",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  padding: "0.25rem 0.6rem",
                }}
              >
                {featuredPost.category}
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#555",
                  fontSize: "0.8rem",
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.05em",
                }}
              >
                {new Date(featuredPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  color: "#ffffff",
                  letterSpacing: "0.05em",
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                }}
              >
                {featuredPost.title}
              </h2>
              <p
                style={{
                  color: "#AAAAAA",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "2rem",
                }}
              >
                {featuredPost.excerpt}
              </p>
              <span
                style={{
                  color: "#FFD700",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "0.9rem",
                  letterSpacing: "0.15em",
                }}
              >
                READ MORE →
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* Post Grid */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem 1.5rem 5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {restPosts.map((post) => (
            <BlogCard key={post.slug} post={post} variant="featured" />
          ))}
        </div>

        {/* Post count */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <p
            style={{
              color: "#555",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
            }}
          >
            Showing {posts.length} posts
          </p>
        </div>
      </section>

      {/* In-feed Ad */}
      <div style={{ margin: "2rem auto", padding: "0 1rem", maxWidth: "800px" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="+20+rg+1y-2u+1l"
          data-ad-client="ca-pub-8745120722611220"
          data-ad-slot="2299562218"
        />
      </div>
      <EmailSignup
        title="NEVER MISS A POST"
        subtitle="New articles on music, personal growth, and the divine timing philosophy — to your inbox."
      />
    </>
  );
}
