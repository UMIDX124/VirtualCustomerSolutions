import { ImageResponse } from "next/og";

export const alt = "DigitalPoint LLC";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(36,18,67,1) 0%, rgba(62,30,104,1) 48%, rgba(228,90,146,1) 100%)",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,172,172,0.24), transparent 28%), radial-gradient(circle at 85% 18%, rgba(255,255,255,0.12), transparent 24%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 40,
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "76px 82px",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #3E1E68 0%, #E45A92 100%)",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              DP
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 18, letterSpacing: 5, textTransform: "uppercase", opacity: 0.76 }}>
                DigitalPoint LLC
              </span>
              <span style={{ fontSize: 22, opacity: 0.78 }}>Digital growth and remote workforce systems</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 820 }}>
            <div style={{ fontSize: 78, lineHeight: 0.98, fontWeight: 700 }}>
              Scale with smarter systems, remote support, and performance-driven marketing.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.45, opacity: 0.84 }}>
              DigitalPoint LLC helps businesses grow through marketing, operations, technology, and expert remote execution.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

