"use client";
import { useEffect } from "react";

interface AdSlotProps {
  slot: string; // AdSense ad unit slot ID
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
}

/**
 * Google AdSense ad slot.
 * Only renders when NEXT_PUBLIC_ADSENSE_PUBLISHER_ID is configured.
 * Place in blog posts, sidebar, or between sections.
 * 
 * Usage:
 *   <AdSlot slot="1234567890" format="auto" />
 * 
 * To activate:
 *   1. Add NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXX to .env.local
 *   2. Replace the slot IDs with your actual AdSense ad unit IDs
 */
export default function AdSlot({ slot, format = "auto", style }: AdSlotProps) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    if (!publisherId) return;
    try {
      // @ts-expect-error adsbygoogle is injected globally
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // silently ignore in dev
    }
  }, [publisherId]);

  if (!publisherId) return null;

  return (
    <div style={{ textAlign: "center", margin: "2rem 0", ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
