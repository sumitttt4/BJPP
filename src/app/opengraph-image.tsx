import { ImageResponse } from "next/og";

export const alt = "Baddie Janta Party campaign poster";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const manifesto = [
  "Situationship Mukt Bharat",
  "Anxiety Free Samaj",
  "Slay Policies Only",
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          color: "#050005",
          fontFamily: "Inter, Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 72,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FF007A",
            color: "#ffffff",
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: 2,
          }}
        >
          POWER TO THE PEOPLE • VOTE HOT • SLAY POLICIES ONLY
        </div>

        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "44px 70px 58px 78px",
          }}
        >
          <div
            style={{
              width: 610,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 136,
                lineHeight: 0.9,
                fontWeight: 950,
                letterSpacing: -4,
              }}
            >
              VOTE HOT
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                color: "#FF007A",
                fontSize: 42,
                lineHeight: 1,
                fontWeight: 950,
                letterSpacing: 1,
              }}
            >
              BADDIE JANTA PARTY
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginTop: 46,
              }}
            >
              {manifesto.map((line) => (
                <div
                  key={line}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 31,
                    lineHeight: 1.1,
                    fontWeight: 800,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      display: "flex",
                      marginRight: 18,
                      backgroundColor: "#FF007A",
                      borderRadius: 999,
                    }}
                  />
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: 420,
              height: 430,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 360,
                height: 360,
                borderRadius: 999,
                backgroundColor: "rgba(255, 0, 122, 0.24)",
                filter: "blur(58px)",
              }}
            />

            <div
              style={{
                width: 390,
                height: 258,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                backgroundColor: "#ffffff",
                border: "4px solid #050005",
                borderRadius: 24,
                padding: 26,
                boxShadow: "18px 18px 0 #FF007A",
                transform: "rotate(5deg)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      color: "#FF007A",
                      fontSize: 20,
                      fontWeight: 950,
                    }}
                  >
                    VOTE HOT
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 8,
                      fontSize: 34,
                      lineHeight: 1,
                      fontWeight: 950,
                    }}
                  >
                    VOTER ID
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: 56,
                    height: 56,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FF007A",
                    color: "#ffffff",
                    borderRadius: 999,
                    fontSize: 30,
                    fontWeight: 950,
                  }}
                >
                  B
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    fontSize: 24,
                    fontWeight: 950,
                  }}
                >
                  BADDIE JANTA PARTY
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: 10,
                    color: "#FF007A",
                    fontSize: 20,
                    fontWeight: 850,
                  }}
                >
                  CERTIFIED BADDIE
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                position: "absolute",
                right: 0,
                top: 52,
                padding: "10px 18px",
                border: "4px solid #FF007A",
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#FF007A",
                fontSize: 27,
                lineHeight: 1,
                fontWeight: 950,
                transform: "rotate(-12deg)",
              }}
            >
              SLAY APPROVED
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
