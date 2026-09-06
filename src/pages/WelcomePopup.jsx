import React, { useEffect, useState } from "react";

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="welcome-popup-overlay" onClick={() => setShow(false)}>
      <div className="welcome-popup-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="welcome-popup-close"
          onClick={() => setShow(false)}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="welcome-popup-logo">
          <img alt="My Ticket Expert" src="/assets/img/header-logo.svg" />
        </div>

        <h2 className="welcome-popup-title">
          Welcome to World Largest Flight booking platform
        </h2>

        <p className="welcome-popup-text">
          Why search for cheap fares for weeks when one call is enough to get
          the best flight deal!
        </p>

        <p className="welcome-popup-cta">Speak to our Expert Now</p>

        <a href="tel:+917307713497" className="welcome-popup-phone">
          <svg
            height="20"
            viewBox="0 0 16 16"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.6713 9.53858L11.6653 9.58858C10.1993 8.85791 10.046 8.76058 9.85664 9.04458C9.7253 9.24124 9.34264 9.68724 9.2273 9.81924C9.11064 9.94924 8.99464 9.95924 8.79664 9.86924C8.59664 9.76924 7.95464 9.55924 7.19464 8.87924C6.60264 8.34924 6.2053 7.69924 6.08797 7.49924C5.89264 7.16191 6.3013 7.11391 6.6733 6.40991C6.73997 6.26991 6.70597 6.15991 6.65664 6.06058C6.60664 5.96058 6.20864 4.98058 6.04197 4.58991C5.88197 4.20058 5.7173 4.24991 5.59397 4.24991C5.20997 4.21658 4.9293 4.22191 4.68197 4.47924C3.60597 5.66191 3.8773 6.88191 4.79797 8.17924C6.6073 10.5472 7.5713 10.9832 9.33397 11.5886C9.80997 11.7399 10.244 11.7186 10.5873 11.6692C10.97 11.6086 11.7653 11.1886 11.9313 10.7186C12.1013 10.2486 12.1013 9.85858 12.0513 9.76858C12.002 9.67858 11.8713 9.62858 11.6713 9.53858Z"></path>
            <path d="M13.68 2.29962C8.554 -2.65571 0.0706667 0.938288 0.0673333 7.92896C0.0673333 9.32629 0.433333 10.689 1.13067 11.8923L0 16.0003L4.22333 14.899C9.49333 17.7456 15.9973 13.9656 16 7.93296C16 5.81562 15.1733 3.82296 13.67 2.32562L13.68 2.29962Z"></path>
          </svg>
          +91 73077 13497
        </a>

        <div className="welcome-popup-hold-time">
          We Currently have 0.05 Sec Hold Time
        </div>
      </div>

      <style>{`
        .welcome-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 20px;
        }
        .welcome-popup-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 28px;
          max-width: 400px;
          width: 100%;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.25);
        }
        .welcome-popup-close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #0067ee;
          color: #fff;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .welcome-popup-logo img {
          height: 40px;
          margin-bottom: 16px;
        }
        .welcome-popup-title {
          font-size: 22px;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .welcome-popup-text {
          color: #555;
          font-size: 15px;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        .welcome-popup-cta {
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
        }
        .welcome-popup-phone {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #16a34a;
          font-weight: 800;
          font-size: 20px;
          text-decoration: none;
          margin-bottom: 20px;
        }
        .welcome-popup-phone svg {
          fill: #0067ee;
        }
        .welcome-popup-hold-time {
          background: #eef6ff;
          color: #0067ee;
          font-weight: 600;
          font-size: 13px;
          padding: 10px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}