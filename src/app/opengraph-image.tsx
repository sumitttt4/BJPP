import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Baddie Janta Party";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const marqueeText = "POWER TO THE PEOPLE • VOTE HOT • SLAY POLICIES ONLY • POWER TO THE PEOPLE • VOTE HOT • SLAY POLICIES ONLY • ";
  
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hot Pink Marquee */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#FF007A",
            padding: "16px 0",
            borderBottom: "2px solid #000000",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#000000",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: "0.1em",
            }}
          >
            {marqueeText}
          </div>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "55%",
              paddingLeft: "80px",
              paddingRight: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#000000",
                fontSize: 130,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              VOTE HOT
            </div>
            <div
              style={{
                display: "flex",
                color: "#FF007A",
                fontSize: 54,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                marginTop: "12px",
                marginBottom: "48px",
              }}
            >
              BADDIE JANTA PARTY
            </div>

            {/* Manifesto Lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Situationship Mukt Bharat",
                "Anxiety Free Samaj",
                "Slay Policies Only",
              ].map((line, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#FF007A",
                      borderRadius: "50%",
                      marginRight: "24px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      color: "#000000",
                      fontSize: 36,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {line}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "45%",
              position: "relative",
            }}
          >
            {/* Subtle glow */}
            <div
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                backgroundColor: "rgba(255, 0, 122, 0.4)",
                filter: "blur(100px)",
                borderRadius: "50%",
              }}
            />

            {/* Voter Card */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "420px",
                height: "260px",
                background: "linear-gradient(135deg, #ffffff 0%, #fff1f8 100%)",
                border: "4px solid #000000",
                borderRadius: "24px",
                transform: "rotate(6deg)",
                boxShadow: "20px 20px 0px 0px rgba(255, 0, 122, 0.1)",
                padding: "24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glossy highlight */}
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%)",
                  transform: "rotate(-15deg)",
                }}
              />

              {/* Card Content */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", fontSize: 16, fontWeight: 900, color: "#FF007A", letterSpacing: "0.1em" }}>
                    ELECTION COMMISSION OF BADDIES
                  </div>
                  <div style={{ display: "flex", fontSize: 32, fontWeight: 900, color: "#000000", marginTop: "8px", letterSpacing: "-0.02em" }}>
                    VOTER ID CARD
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
                <div style={{ display: "flex", fontSize: 14, fontWeight: 700, color: "#666666", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  ID Number
                </div>
                <div style={{ display: "flex", fontSize: 24, fontFamily: "monospace", fontWeight: 700, color: "#000000", marginTop: "4px" }}>
                  BJP-0421-SLAY
                </div>
              </div>

              {/* Status Badge */}
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  bottom: "24px",
                  right: "24px",
                  backgroundColor: "#FF007A",
                  padding: "8px 16px",
                  borderRadius: "100px",
                }}
              >
                <div style={{ display: "flex", fontSize: 14, fontWeight: 900, color: "#ffffff", letterSpacing: "0.05em" }}>
                  CERTIFIED BADDIE
                </div>
              </div>
            </div>

            {/* Stamp Badge */}
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: "100px",
                right: "40px",
                border: "4px solid #FF007A",
                color: "#FF007A",
                fontSize: 24,
                fontWeight: 900,
                letterSpacing: "0.1em",
                padding: "8px 16px",
                transform: "rotate(-15deg)",
                backgroundColor: "rgba(255, 0, 122, 0.05)",
                borderRadius: "8px",
              }}
            >
              SLAY APPROVED
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
