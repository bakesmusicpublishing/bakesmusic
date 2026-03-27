<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.5rem",
  }}
>
  {restPosts.map((post) => (
    <>
      <BlogCard key={post.slug} post={post} variant="featured" />
      {/* In‑feed Ad */}
      <div style={{ margin: '2rem auto', padding: '0 1rem' }}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8745120722611220" crossorigin="anonymous"></script>
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-format="fluid"
             data-ad-layout-key="+20+rg+1y-2u+1l"
             data-ad-client="ca-pub-8745120722611220"
             data-ad-slot="2299562218"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </>
  ))}
</div>
