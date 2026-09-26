import React, { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { track } from '@vercel/analytics'
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
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Hey, did you hear that <span className="text-gradient" style={{ fontSize: '1.3em' }}>Netly</span> is launched!</h1>
        <h2 className="hero-subtitle highlight">A seamless mobile extension to LPU Autoconnect.</h2>
        <p className="hero-subtitle">
          Fed up entering credentials to the LPU network every time? Now don't worry!
          Just save your credentials one time and tap connect—we will handle the rest.
        </p>
        <div className="download-wrapper">
          <a href="/Netly.apk" download="Netly.apk" className="download-btn" onClick={() => track('Download_APK')}>
            <span>Download (Android Version)</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM4 20V17H6V18H18V17H20V20H4Z" fill="currentColor" />
            </svg>
          </a>
          <div className="latest-version-text">Latest Version: v1.0.32-beta</div>
        </div>
        <p className="beta-notice">
          Experience the beta version today. We will come back with iOS soon!
        </p>
      </div>

      {/* Important Alert */}
      <div className="alert-box glass-panel">
        <div className="alert-icon">⚠️</div>
        <div className="alert-content">
          <h3 className="alert-title">Important Note</h3>
          <p className="alert-text">When you connect to the network, your phone might show an annoying browser pop-up to sign in. just Close that pop-up window and return to the netly app, and tap Connect. We'll bypass it for you!</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="content-container">

        {/* Steps & Image Section */}
        <section className="steps-section">
          <div className="steps-content">
            <h2 className="section-title">3 steps to connect:</h2>
            <ol className="steps-list">
              <li><span>1.</span> Save your credentials in app</li>
              <li><span>2.</span> Locate the wifi you want to connect</li>
              <li><span>3.</span> Hit connect</li>
            </ol>
          </div>
          <div className="steps-image">
            <img src="/sticker.png" alt="Netly App Showcase" className="app-preview-img floating" />
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="demo-section">
          <h2 className="section-title text-center">See it in action</h2>
          <div className="video-wrapper glass-panel">
            <iframe 
              src="https://drive.google.com/file/d/1s4bHWFvdontGOsT_cWHiAG5SIi-EssL0/preview" 
              width="100%" 
              height="100%" 
              allow="autoplay"
              className="demo-video"
              title="Netly Demo"
            ></iframe>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title text-center">Why Netly?</h2>
          <div className="features-grid">
            <div className="feature-card glass-panel">
              <div className="feature-icon">🚫</div>
              <h3 className="feature-title">No App Login Required</h3>
              <p className="feature-desc">Open the app and start using it instantly. We don't ask you to create an account with us.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Save Multiple IDs</h3>
              <p className="feature-desc">Can save multiple ID's, you can borrow one from your friends too and switch seamlessly.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Seamless Connectivity</h3>
              <p className="feature-desc">Connect within seconds without manually typing your credentials every single time.</p>
            </div>

            <div className="feature-card glass-panel highlight-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Zero-Knowledge Architecture</h3>
              <p className="feature-desc">Built on Zero-Knowledge Architecture, meaning we have not used a database to store anything from your side.</p>
            </div>
          </div>
          <div className="encryption-badge">
            Your credentials are encrypted using the Android Keystore System
          </div>
        </section>
      </div>

      <section className="developer-section glass-panel">
        <h3 className="dev-title">Developer</h3>
        <p className="dev-desc">Developed by <strong>Soumya Prerit</strong><br />3rd year student, Lovely Professional University</p>
        <div className="dev-links">
          <a href="https://github.com/prerityash" target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/soumya-prerit-/" target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
        </div>
      </section>

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
