import './Footer.css';

export default function Footer({ token }) {
  return (
    <footer className="footer" id="footer">
      {/* BG Text */}
      <div className="footer-bg-text font-impact">LEGOFICATION</div>

      {/* Top hazard stripes */}
      <div className="footer-hazard-top">
        <div className="hazard-full">
          {[...Array(30)].map((_, i) => <div key={i}></div>)}
        </div>
      </div>

      <div className="footer-container">
        {/* Big logo */}
        <div className="footer-logo animate-in">
          <img src={token.imageUrl} alt="LEGO" className="footer-logo-img" />
          <h2 className="footer-title font-impact">${token.symbol}</h2>
          <p className="footer-tagline">Stop Being Poor. Start Building.</p>
        </div>

        {/* Social icons */}
        <div className="footer-socials animate-in">
          <a
            href={token.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="Twitter / X"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={token.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="TikTok"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.83.1v-3.5a6.37 6.37 0 0 0-.83-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.07a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.5z" />
            </svg>
          </a>
          <a
            href={token.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="YouTube"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href={`https://dexscreener.com/solana/${token.pairAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="DexScreener"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="8 12 12 8 16 12" />
              <line x1="12" y1="16" x2="12" y2="8" />
            </svg>
          </a>
        </div>

        {/* CTAs */}
        <div className="footer-ctas animate-in">
          <a
            href={`https://pump.fun/coin/${token.ca}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-impact"
          >
            Buy $LEGO Now
          </a>
          <a
            href={`https://dexscreener.com/solana/${token.pairAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline font-impact"
          >
            View Chart
          </a>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2025 LEGOFICATION. All rights reserved.</span>
          <span className="footer-disclaimer">
            $LEGO is a meme coin with no intrinsic value or financial return expectation. Not financial advice. DYOR.
          </span>
        </div>
      </div>
    </footer>
  );
}
