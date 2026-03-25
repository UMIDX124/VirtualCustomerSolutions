import { ImageResponse } from "next/og";

export const alt = "Virtual Customer Solution";
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
            "linear-gradient(135deg, #F8F3E1 0%, #E3DBBB 48%, #F8F3E1 100%)",
          color: "#41431B",
          fontFamily: "Merriweather, Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(174,183,132,0.15), transparent 28%), radial-gradient(circle at 85% 18%, rgba(65,67,27,0.08), transparent 24%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 40,
            borderRadius: 36,
            border: "1px solid rgba(65,67,27,0.1)",
            background: "rgba(248,243,225,0.6)",
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
                background: "linear-gradient(135deg, #41431B 0%, #AEB784 100%)",
                fontSize: 28,
                fontWeight: 700,
                color: "white",
              }}
            >
              VCS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 18, letterSpacing: 5, textTransform: "uppercase", opacity: 0.76, color: "#5A5C2A" }}>
                Virtual Customer Solution
              </span>
              <span style={{ fontSize: 22, opacity: 0.78, color: "#7A7C5A" }}>IT, Marketing & Remote Workforce Solutions</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 820 }}>
            <div style={{ fontSize: 78, lineHeight: 0.98, fontWeight: 700, color: "#41431B" }}>
              Scale with smarter systems, remote support, and performance-driven marketing.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.45, opacity: 0.84, color: "#5A5C2A" }}>
              Virtual Customer Solution helps businesses grow through marketing, operations, technology, and expert remote execution.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
