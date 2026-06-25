import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Пляж-парк Прищепка в Красноярске";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FFC531 0%, #FF7A18 45%, #FF4D6D 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "rgba(255,255,255,0.95)",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          ПЛЯЖ-ПАРК · КРАСНОЯРСК
        </div>
        <div
          style={{
            fontSize: 180,
            color: "#fff",
            fontWeight: 900,
            lineHeight: 1,
            marginTop: 10,
            textShadow: "0 8px 30px rgba(0,0,0,0.25)",
          }}
        >
          ПРИЩЕПКА
        </div>
        <div
          style={{
            fontSize: 44,
            color: "#0B2545",
            fontWeight: 700,
            marginTop: 20,
          }}
        >
          Лето · Солнце · Отдых у воды — ежедневно 09:00–21:00
        </div>
      </div>
    ),
    { ...size }
  );
}
