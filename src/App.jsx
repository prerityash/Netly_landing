import React, { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './index.css'

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="landing-container">
      <Analytics />
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Netly</div>
        <div className="nav-links">
          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle Theme" title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="https://github.com/prerityash" target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/soumya-prerit-/" target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Hey, did you hear that <span className="text-gradient">Netly</span> is launched!</h1>
        <h2 className="hero-subtitle highlight">A seamless mobile extension to LPU Autoconnect.</h2>
        <p className="hero-subtitle">
          Fed up entering credentials to the LPU network every time? Now don't worry!
          Just save your credentials one time and tap connect—we will handle the rest.
        </p>
        <a href="/netly-app.apk" download="Netly.apk" className="download-btn">
          <span>Download for Android</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM4 20V17H6V18H18V17H20V20H4Z" fill="currentColor" />
          </svg>
        </a>
        <p className="beta-notice">
          Experience the beta version today. We will come back with iOS soon!
        </p>
      </div>

      {/* Important Alert */}
      <div className="alert-box glass-panel">
        <div className="alert-icon">⚠️</div>
        <div className="alert-content">
          <h3 className="alert-title">Important Note</h3>
          <p className="alert-text">When you connect to the network, your phone might show an annoying browser pop-up to sign in. <strong>Please close that pop-up window immediately</strong>, return to the Netly app, and tap Connect. We'll bypass it for you!</p>
        </div>
      </div>

      {/* Modular Zigzag Sections */}
      <div className="modular-container">

        {/* Step 1 - Image Left, Content Right */}
        <section className="modular-section">
          <div className="modular-image-container">
            <img src="/mod1.jpg" alt="Step 1: Scan Networks" className="modular-img floating-1" />
          </div>
          <div className="modular-content">
            <div className="step-badge">Module 01</div>
            <h2 className="step-title">Scan the Network</h2>
            <p className="step-desc">Launch Netly and instantly scan for available organizational Wi-Fi networks around you in real-time.</p>
          </div>
        </section>

        {/* Step 2 - Content Left, Image Right (Achieved via .reverse class) */}
        <section className="modular-section reverse">
          <div className="modular-image-container">
            <img src="/mod2.jpg" alt="Step 2: Add Credentials" className="modular-img floating-2" />
          </div>
          <div className="modular-content">
            <div className="step-badge">Module 02</div>
            <h2 className="step-title">Save Multiple Credentials</h2>
            <p className="step-desc">Navigate to the Accounts section and securely vault your captive portal credentials directly on your device. You can borrow one from your friends too!</p>
          </div>
        </section>

        {/* Step 3 - Image Left, Content Right */}
        <section className="modular-section">
          <div className="modular-image-container">
            <img src="/mod3.jpg" alt="Step 3: Automate Connections" className="modular-img floating-3" />
          </div>
          <div className="modular-content">
            <div className="step-badge">Module 03</div>
            <h2 className="step-title">Connect within a sec</h2>
            <p className="step-desc">Netly autonomously detects the captive portal, injects your credentials, and establishes a blazing fast, secure connection.</p>
          </div>
        </section>

      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Netly</div>
          <p>&copy; {new Date().getFullYear()} by Soumya Prerit. Built to secure your connection.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
