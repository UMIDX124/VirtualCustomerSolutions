import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          borderRadius: "36px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #22C55E, #059669)",
          }}
        >
          <span
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            V
          </span>
        </div>
        <span
          style={{
            marginTop: "8px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#A1A1AA",
            letterSpacing: "2px",
          }}
        >
          VCS
        </span>
      </div>
    ),
    { ...size }
  );
}
