import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import './Hero.css';

const STICKERS = [
  { emoji: '🧱', top: '12%', left: '8%', anim: 'stickerFloat', dur: '4s', delay: '0s', size: '3rem' },
  { emoji: '💰', top: '25%', right: '10%', anim: 'stickerBounce', dur: '3.5s', delay: '0.5s', size: '2.8rem' },
  { emoji: '🚀', bottom: '30%', left: '6%', anim: 'stickerSpin', dur: '5s', delay: '1s', size: '3.2rem' },
  { emoji: '🔥', top: '18%', right: '6%', anim: 'stickerPop', dur: '4s', delay: '0.3s', size: '2.5rem' },
  { emoji: '🐍', bottom: '25%', right: '8%', anim: 'stickerFloat', dur: '4.5s', delay: '1.5s', size: '2.6rem' },
  { emoji: '⚡', top: '60%', left: '4%', anim: 'stickerBounce', dur: '3s', delay: '0.8s', size: '2.2rem' },
  { emoji: '💎', bottom: '35%', left: '12%', anim: 'stickerPop', dur: '5s', delay: '2s', size: '2.4rem' },
  { emoji: '🏗️', top: '45%', right: '4%', anim: 'stickerSpin', dur: '6s', delay: '0.2s', size: '2.8rem' },
];

const SPARKLES = Array.from({ length: 12 }, (_, i) => ({
  left: `${5 + Math.random() * 90}%`,
  top: `${5 + Math.random() * 90}%`,
  delay: `${i * 0.4}s`,
  dur: `${1.5 + Math.random() * 2}s`,
  size: `${3 + Math.random() * 5}px`,
}));

export default function Hero({ token }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token.ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero" id="hero">
      {/* Banner Background */}
      <div className="hero-banner-bg">
        <img
          src={token.bannerUrl}
          alt="LEGOFICATION Banner"
          className="hero-banner-img"
        />
        <div className="hero-banner-overlay"></div>
      </div>

      {/* Scan line effect */}
      <div className="hero-scanline"></div>

      {/* Floating coins */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-coin"
          style={{
            width: `${20 + Math.random() * 35}px`,
            height: `${20 + Math.random() * 35}px`,
            left: `${5 + Math.random() * 90}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Floating stickers */}
      {STICKERS.map((s, i) => (
        <div
          key={`sticker-${i}`}
          className="floating-sticker"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            fontSize: s.size,
            animation: `${s.anim} ${s.dur} ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        >
          {s.emoji}
        </div>
      ))}

      {/* Sparkles */}
      {SPARKLES.map((sp, i) => (
        <div
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            left: sp.left,
            top: sp.top,
            width: sp.size,
            height: sp.size,
            animationDelay: sp.delay,
            animationDuration: sp.dur,
          }}
        />
      ))}

      {/* Corner brackets */}
      <div className="bracket br-tl"></div>
      <div className="bracket br-br"></div>

      {/* Main content overlay */}
      <div className="hero-content">
        <div className="hero-top-badge animate-in">
          <span className="badge-dot"></span>
          <span>LIVE ON SOLANA</span>
        </div>

        <h1 className="hero-title font-impact animate-in">
          <span className="hero-title-line1 glitch-text" data-text="LEGO">LEGO</span>
          <span className="hero-title-line2 glitch-text" data-text="FICATION">FICATION</span>
        </h1>

        <p className="hero-tagline animate-in">
          Stop Being Poor. Start Building.
        </p>

        <div className="hero-stats animate-in">
          <div className="hero-stat">
            <span className="hero-stat-label">Price</span>
            <span className="hero-stat-value">{token.price}</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-label">Market Cap</span>
            <span className="hero-stat-value">{token.mcap}</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-label">24h Change</span>
            <span className={`hero-stat-value ${token.priceChange24h.startsWith('+') ? 'green' : 'red'}`}>
              {token.priceChange24h}
            </span>
          </div>
        </div>

        <div className="hero-ca animate-in" onClick={handleCopy}>
          <span className="ca-label">CA:</span>
          <span className="ca-address">{token.ca.slice(0, 6)}...{token.ca.slice(-4)}</span>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied && <span className="copied-toast">Copied!</span>}
        </div>

        <div className="hero-actions animate-in">
          <a
            href={`https://pump.fun/coin/${token.ca}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-impact"
          >
            Buy $LEGO
            <ExternalLink size={16} />
          </a>
          <a
            href={`https://dexscreener.com/solana/${token.pairAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline font-impact"
          >
            Live Chart
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
}
