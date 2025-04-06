"use client";

import React, { useEffect, useRef } from "react";

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        track.style.animationPlayState = "paused";
      } else {
        track.style.animationPlayState = "running";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const resetAnimation = () => {
      if (!track || !container) return;
      const style = window.getComputedStyle(track);
      let currentX = 0;
      if (style.transform && style.transform !== "none" && style.transform.includes("matrix")) {
        try {
          // Use DOMMatrixReadOnly for modern browsers
          const matrix = new DOMMatrixReadOnly(style.transform);
          currentX = matrix.m41;
        } catch (e) {
          // Fallback for browsers without DOMMatrixReadOnly
          const matrixMatch = style.transform.match(/matrix.*\((.+)\)/);
          if (matrixMatch && matrixMatch[1]) {
            currentX = parseFloat(matrixMatch[1].split(", ")[4]);
          }
        }
      }

      const trackWidth = track.offsetWidth;
      const containerWidth = container.offsetWidth;

      if (Math.abs(currentX) > trackWidth / 2 - containerWidth) {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        // Force reflow
        void track.offsetWidth;
        track.style.transition = "";
        track.style.animation = "scroll 60s linear infinite";
      }
    };

    const intervalId = setInterval(resetAnimation, 30000);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-container" ref={containerRef}>
          <div className="testimonial-track" ref={trackRef}>
            {/* ===== TESTIMONIAL CARDS ===== */}
            <div className="testimonial-card">
              <div className="testimonial-text-container">
                <p className="testimonial-text">
                  Sehr flexibel bei Terminverschiebungen, professionell, zuverlässig und pünktlich. Ich bin sehr zufrieden mit der geleisteten Arbeit und dem Ergebnis!
                </p>
              </div>
              <div className="testimonial-author-container">
                <div className="testimonial-stars">
                  <img
                    src="https://kreativclean.de/wp-content/uploads/2025/02/5-Sterne.svg"
                    alt="5 Sterne Bewertung"
                  />
                </div>
                <p className="testimonial-author">MyHammer-Kunde</p>
                <p className="testimonial-source">MYHAMMER</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text-container">
                <p className="testimonial-text">
                  Sehr gute Arbeit geleistet. Nach Malerarbeiten waren stark verschmutzte und eingetrocknete Fußbodenleisten und Fenster sehr gründlich und sauber gereinigt worden.
                </p>
              </div>
              <div className="testimonial-author-container">
                <div className="testimonial-stars">
                  <img
                    src="https://kreativclean.de/wp-content/uploads/2025/02/5-Sterne.svg"
                    alt="5 Sterne Bewertung"
                  />
                </div>
                <p className="testimonial-author">Thomas Poing</p>
                <p className="testimonial-source">MYHAMMER</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text-container">
                <p className="testimonial-text">
                  Sehr zuverlässig, pünktlich und kompetent. Die Arbeit wurde perfekt ausgeführt. Immer erreichbar und schnell auf Anfragen reagiert - vielen Dank für den tollen Service!
                </p>
              </div>
              <div className="testimonial-author-container">
                <div className="testimonial-stars">
                  <img
                    src="https://kreativclean.de/wp-content/uploads/2025/02/5-Sterne.svg"
                    alt="5 Sterne Bewertung"
                  />
                </div>
                <p className="testimonial-author">Katrin Baumann</p>
                <p className="testimonial-source">MYHAMMER</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text-container">
                <p className="testimonial-text">
                  Freundlich, unkomplizierte Terminfindung und Absprache. Die Arbeit wurde sauber und präzise durchgeführt. Faire Preise und gründliche Ausführung.
                </p>
              </div>
              <div className="testimonial-author-container">
                <div className="testimonial-stars">
                  <img
                    src="https://kreativclean.de/wp-content/uploads/2025/02/5-Sterne.svg"
                    alt="5 Sterne Bewertung"
                  />
                </div>
                <p className="testimonial-author">MyHammer-Kunde</p>
                <p className="testimonial-source">MYHAMMER</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text-container">
                <p className="testimonial-text">
                  Absolut hervorragende Arbeit & sehr zuverlässiger Service. Sehr netter Kontakt im Vorfeld, pünktliches Erscheinen und exzellente Endreinigung nach den Arbeiten!
                </p>
              </div>
              <div className="testimonial-author-container">
                <div className="testimonial-stars">
                  <img
                    src="https://kreativclean.de/wp-content/uploads/2025/02/5-Sterne.svg"
                    alt="5 Sterne Bewertung"
                  />
                </div>
                <p className="testimonial-author">MyHammer-Kunde</p>
                <p className="testimonial-source">MYHAMMER</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text-container">
                <p className="testimonial-text">
                  Sehr pünktlich und ausgesprochen freundlich! Super Arbeit abgeliefert mit viel Sorgfalt. Sehr nette Kommunikation vor und während der Arbeiten. Immer wieder gerne. Klare Weiterempfehlung!
                </p>
              </div>
              <div className="testimonial-author-container">
                <div className="testimonial-stars">
                  <img
                    src="https://kreativclean.de/wp-content/uploads/2025/02/5-Sterne.svg"
                    alt="5 Sterne Bewertung"
                  />
                </div>
                <p className="testimonial-author">Eileen Hamilton</p>
                <p className="testimonial-source">MYHAMMER</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-text-container">
                <p className="testimonial-text">
                  Alles Bestens! Großer Einsatz bei der Grundreinigung einer sehr großen Wohnung mit schwierigen Ecken. Zügige, zeitgerechte und gründliche Bearbeitung. Sehr kundenorientiert.
                </p>
              </div>
              <div className="testimonial-author-container">
                <div className="testimonial-stars">
                  <img
                    src="https://kreativclean.de/wp-content/uploads/2025/02/5-Sterne.svg"
                    alt="5 Sterne Bewertung"
                  />
                </div>
                <p className="testimonial-author">Robert Stürzer</p>
                <p className="testimonial-source">MYHAMMER</p>
              </div>
            </div>

            {/* Duplicate testimonial cards for seamless looping */}
          </div>
        </div>
      </div>
      <style jsx>{`
        :root {
          --star-height: 30px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Montserrat", sans-serif;
          background-color: #f8f9fa;
          color: #333;
          line-height: 1.6;
        }

        .testimonial-section {
          padding: 80px 0;
          background-color: #fff;
          overflow: hidden;
          position: relative;
        }

        .testimonial-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .testimonial-container::before,
        .testimonial-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .testimonial-container::before {
          left: 0;
          background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
        }

        .testimonial-container::after {
          right: 0;
          background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
        }

        .testimonial-track {
          display: flex;
          position: relative;
          width: fit-content;
          animation: scroll 60s linear infinite;
        }

        /* Removed hover pausing rule */
        /* .testimonial-track:hover {
          animation-play-state: paused;
        } */

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          flex: 0 0 auto;
          width: 400px;
          height: auto;
          min-height: 220px;
          margin: 30px 20px;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 24px;
          border: 2px solid #058dd8;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonial-card:hover {
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .testimonial-text-container {
          flex-grow: 1;
          margin-bottom: 15px;
        }

        .testimonial-text {
          font-size: 16.5px;
          color: #555;
          font-weight: 500;
          line-height: 1.6;
        }

        .testimonial-author-container {
          padding-left: 0;
          padding-bottom: 5px;
          margin-top: -50px;
          position: relative;
          z-index: 2;
        }

        .testimonial-stars {
          text-align: left;
          margin-bottom: 1px;
        }

        .testimonial-stars img {
          height: var(--star-height);
          width: auto;
        }

        .testimonial-author {
          font-weight: 700;
          color: #333;
          text-align: left;
          margin-bottom: 0 !important;
        }

        .testimonial-source {
          font-size: 12px;
          font-weight: 600 !important;
          color: #777;
          text-align: left;
          margin-top: 5px;
          margin-bottom: 0 !important;
        }

        .section-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 28px;
          color: #333;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
