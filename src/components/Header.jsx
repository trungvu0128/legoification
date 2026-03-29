import { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ token }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`hud-nav ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <img
            src={token.imageUrl}
            alt="LEGO"
            className="nav-logo-img"
          />
          <span className="nav-logo-text font-impact">${token.symbol}</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#tokenomics" onClick={() => setMenuOpen(false)}>Tokenomics</a>
          <a href="#lore" onClick={() => setMenuOpen(false)}>Lore</a>
          <a href="#how-to-buy" onClick={() => setMenuOpen(false)}>How to Buy</a>
          <a href="#chart" onClick={() => setMenuOpen(false)}>Chart</a>
        </nav>

        <div className="nav-actions">
          <a
            href={token.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            aria-label="Twitter"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={token.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            aria-label="TikTok"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.83.1v-3.5a6.37 6.37 0 0 0-.83-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.07a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.5z" />
            </svg>
          </a>
          <a
            href={token.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            aria-label="YouTube"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href={`https://pump.fun/coin/${token.ca}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-buy-btn font-impact"
          >
            Buy $LEGO
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
