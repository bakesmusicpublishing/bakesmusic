import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug, getRelatedPosts } from "../../data/posts";
import BlogCard from "../../components/BlogCard";
import AdSlot from "../../components/AdSlot";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Bakes Blog" };

  return {
    title: `${post.title} | Bakes Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Bakes Blog`,
      description: post.excerpt,
      url: `https://bakesmusic.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Bakes"],
      images: [
        {
          url: post.image || "https://bakesmusic.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Bakes Blog`,
      description: post.excerpt,
    },
  };
}

const categoryColors: Record<string, string> = {
  "Music Career": "#FFD700",
  "Personal Growth": "#00FFCC",
  "Hip-Hop Culture": "#FF6B6B",
  "Divine Timing": "#C084FC",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);
  const catColor = categoryColors[post.category] || "#FFD700";

  // Convert markdown-like content to paragraphs
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={i}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#ffffff",
              letterSpacing: "0.06em",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              paddingLeft: "1rem",
              borderLeft: `4px solid ${catColor}`,
            }}
          >
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p
            key={i}
            style={{
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "0.5rem",
            }}
          >
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.trim() !== "") {
        // Handle inline bold and italic
        const processedLine = line
          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
          .replace(/\*([^*]+)\*/g, "<em>$1</em>");

        elements.push(
          <p
            key={i}
            dangerouslySetInnerHTML={{ __html: processedLine }}
            style={{
              color: "#AAAAAA",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.9,
              marginBottom: "1.25rem",
            }}
          />
        );
      }

      i++;
    }

    return elements;
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#080b10",
          paddingTop: "100px",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
            }}
          >
            <Link href="/" style={{ color: "#555", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "#333" }}>/</span>
            <Link href="/blog" style={{ color: "#555", textDecoration: "none" }}>
              Blog
            </Link>
            <span style={{ color: "#333" }}>/</span>
            <span style={{ color: "#AAAAAA" }}>{post.title}</span>
          </div>

          {/* Category + date */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                backgroundColor: catColor,
                color: "#080b10",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                padding: "0.25rem 0.6rem",
              }}
            >
              {post.category}
            </span>
            <span
              style={{
                color: "#555",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
              }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span
              style={{
                color: "#555",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
              }}
            >
              By <span style={{ color: "#FFD700" }}>Bakes</span>
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 0.95,
              color: "#ffffff",
              letterSpacing: "0.04em",
              marginBottom: "1.5rem",
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "#AAAAAA",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              fontFamily: "Inter, sans-serif",
              borderLeft: `3px solid ${catColor}`,
              paddingLeft: "1.25rem",
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Cover image */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ width: "100%", aspectRatio: "16/7", marginTop: "3rem", position: "relative", overflow: "hidden", backgroundColor: "#111" }}>
          {post.image ? (
            <img
              src={post.image}
              alt={`${post.title} — Bakes hip-hop blog`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <>
              <img
                src="/images/gallery/bakes-professional-photoshoot-lyrical-hiphop-artist-001.jpg"
                alt={`${post.title} — Bakes hip-hop blog`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.4 }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.5rem, 4vw, 3rem)", color: "#FFD700", letterSpacing: "0.2em", textAlign: "center", padding: "1rem", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
                  {post.category.toUpperCase()}
                </p>
              </div>
            </>
          )}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(180deg, transparent, rgba(8,11,16,0.9))" }} />
        </div>
      </div>

      {/* Article JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image || "https://bakesmusic.com/images/og-image.jpg",
          "url": `https://bakesmusic.com/blog/${post.slug}`,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Person",
            "name": "Bakes",
            "url": "https://bakesmusic.com/about",
            "sameAs": [
              "https://open.spotify.com/artist/4syNtiG715ZmiLemlyR8Sm",
              "https://instagram.com/bakes.music.official"
            ]
          },
          "publisher": {
            "@type": "Organization",
            "name": "Bakes Music",
            "url": "https://bakesmusic.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://bakesmusic.com/images/og-image.jpg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://bakesmusic.com/blog/${post.slug}`
          },
          "articleSection": post.category,
          "keywords": [post.category, "Bakes", "hip-hop", "San Diego rap", "lyrical hip-hop", "independent music"].join(", ")
        }) }}
      />

      {/* Article Body */}
      <article
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
        }}
      >
        {/* AdSense — above article (activates when publisher ID is set) */}
        <AdSlot slot="REPLACE_WITH_AD_UNIT_ID_1" format="horizontal" style={{ marginBottom: "2rem" }} />

        {renderContent(post.content)}

        {/* AdSense — mid article */}
        <AdSlot slot="REPLACE_WITH_AD_UNIT_ID_2" format="rectangle" style={{ margin: "2rem 0" }} />

        {/* Author bio */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            backgroundColor: "#111111",
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            borderLeft: "4px solid #FFD700",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                color: "#FFD700",
                letterSpacing: "0.1em",
              }}
            >
              B
            </span>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                color: "#FFD700",
                letterSpacing: "0.08em",
                marginBottom: "0.25rem",
              }}
            >
              BAKES
            </p>
            <p
              style={{
                color: "#AAAAAA",
                fontSize: "0.85rem",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Lyrical hip-hop artist from San Diego, CA. Bay Area roots. Building the
              empire, one bar at a time.{" "}
              <Link href="/about" style={{ color: "#FFD700", textDecoration: "none" }}>
                Learn more →
              </Link>
            </p>
          </div>
        </div>

        {/* Share + back */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/blog"
            style={{
              color: "#AAAAAA",
              textDecoration: "none",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
            }}
          >
            ← ALL POSTS
          </Link>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://bakesmusic.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#AAAAAA",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              SHARE ON X
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section
          style={{
            backgroundColor: "#111111",
            padding: "5rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "#ffffff",
                letterSpacing: "0.08em",
                marginBottom: "2rem",
              }}
            >
              RELATED POSTS
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
