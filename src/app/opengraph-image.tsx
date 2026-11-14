import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Rumah Ramah Indonesia — Ruang Temu, Kolaborasi, dan Aksi.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public", "RRI_Polos.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f6f2e9",
          color: "#182230",
          padding: "64px 72px",
          borderTop: "12px solid #8c2628",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(24, 34, 48, 0.16)",
            paddingBottom: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt="Logo Rumah Ramah Indonesia"
              width={64}
              height={68}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Rumah Ramah Indonesia
              </span>
              <span
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6c685e",
                  marginTop: "4px",
                }}
              >
                Gerakan Kebersamaan Warga
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8c2628",
            }}
          >
            rumahramah.id
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Ruang Temu,
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              paddingLeft: "64px",
            }}
          >
            Kolaborasi,
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#8c2628",
              paddingLeft: "128px",
            }}
          >
            Dan Aksi.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(24, 34, 48, 0.16)",
            paddingTop: "24px",
            fontSize: "24px",
            color: "#3b434f",
          }}
        >
          <span>Merawat keberagaman, menguatkan persatuan.</span>
          <span style={{ fontWeight: 700, color: "#182230" }}>
            Bersama untuk Indonesia
          </span>
        </div>
      </div>
    ),
    size,
  );
}
