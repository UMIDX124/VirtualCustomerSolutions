import { ImageResponse } from "next/og";

export const alt = "Virtual Customer Solution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", height: "100%", width: "100%", background: "linear-gradient(135deg, #0F172A 0%, #1E293B 48%, #059669 100%)", color: "#F8FAFC", fontFamily: "Merriweather, Georgia, serif", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.15), transparent 28%), radial-gradient(circle at 85% 18%, rgba(29,78,216,0.1), transparent 24%)" }} />
        <div style={{ position: "absolute", inset: 40, borderRadius: 36, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(30,41,59,0.5)" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "76px 82px", width: "100%", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 74, height: 74, borderRadius: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #059669 0%, #22C55E 100%)", fontSize: 28, fontWeight: 700, color: "#F8FAFC" }}>VCS</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 18, letterSpacing: 5, textTransform: "uppercase", opacity: 0.76, color: "#CBD5E1" }}>Virtual Customer Solution</span>
              <span style={{ fontSize: 22, opacity: 0.78, color: "#94A3B8" }}>IT, Marketing & Remote Workforce Solutions</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 820 }}>
            <div style={{ fontSize: 78, lineHeight: 0.98, fontWeight: 700, color: "#F8FAFC" }}>Scale with smarter systems, remote support, and performance-driven marketing.</div>
            <div style={{ fontSize: 28, lineHeight: 1.45, opacity: 0.84, color: "#CBD5E1" }}>Virtual Customer Solution helps businesses grow through marketing, operations, technology, and expert remote execution.</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
