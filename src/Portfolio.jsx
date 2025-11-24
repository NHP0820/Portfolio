// src/Portfolio.jsx
import React from "react";

const repos = [
  {
    name: "Image Watermarking",
    description: "Python image watermarking tool.",
    url: "https://github.com/NHP0820/Image-Watermarking"
  },
  {
    name: "BookHero",
    description: "PHP + MySQL staff management system.",
    url: "https://github.com/NHP0820/BookHero"
  },
  {
    name: "Mobile Signature Assignment",
    description: "Flutter mobile assignment app.",
    url: "https://github.com/NHP0820/Mobile"
  },
  {
    name: "Machine Learning Assignment",
    description: "ML experiments: LR, KNN, SVM.",
    url: "https://github.com/NHP0820/AI---Heart-Disease-Prediction"
  }
];

export default function Portfolio() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f1724",
        color: "#e6eef8",
        fontFamily: "Inter, system-ui, Arial"
      }}
    >
      {/* Center Content */}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
        {/* Header */}
        <header style={{ marginBottom: 28 }}>
          <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>LO ZHENG YU</h1>
          <p style={{ margin: "6px 0 0", color: "#bcd1ea", fontSize: 18 }}>
            AI / ML / WEB developer
          </p>
        </header>

        {/* About Section */}
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ margin: "0 0 8px", fontSize: 22 }}>About me</h2>
          <p style={{ margin: 0, color: "#c9dff4", lineHeight: 1.6 }}>
            Proficient in Flutter and Python, with practical experience in machine learning,
            image processing, and basic backend development. Has completed multiple academic
            and personal projects, capable of independently implementing everything from
            front-end interfaces and data processing to model applications.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 style={{ margin: "18px 0 12px", fontSize: 22 }}>Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16
            }}
          >
            {repos.map((r) => (
              <article
                key={r.name}
                style={{
                  background: "#0b1220",
                  padding: 16,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)"
                }}
              >
                <h3 style={{ margin: 0, fontSize: 18 }}>{r.name}</h3>
                <p style={{ margin: "8px 0 0", color: "#bcd1ea", lineHeight: 1.5 }}>
                  {r.description}
                </p>

                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 12px",
                      background: "#2563eb",
                      color: "white",
                      borderRadius: 8,
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 500
                    }}
                  >
                    View Repo
                  </a>

                  <button
                    onClick={() => navigator.clipboard?.writeText(r.url)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 8,
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#dbeafe",
                      cursor: "pointer",
                      fontSize: 14
                    }}
                  >
                    Copy Link
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ marginTop: 36, color: "#9fb4d8", fontSize: 15 }}>
          <p>Tel : 0165424387</p>
          <p>Email : lozy-wm21@student.tarc.edu.my</p>
        </footer>
      </div>
    </div>
  );
}
