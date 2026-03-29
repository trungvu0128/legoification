import tokenomicsImg from '../assets/tokenomics.jpg';
import './Tokenomics.css';

export default function Tokenomics({ token }) {
  const stats = [
    { label: 'Current Price', value: token.price, color: '#FFD700' },
    { label: 'Market Cap', value: token.mcap, color: '#00ff88' },
    { label: '24h Volume', value: token.volume, color: '#1a6bff' },
    { label: 'Liquidity', value: token.liquidity, color: '#ff6b35' },
    { label: '24h Buys', value: token.buys24h, color: '#00ff88' },
    { label: '24h Sells', value: token.sells24h, color: '#ff4444' },
  ];

  return (
    <section className="tokenomics" id="tokenomics">
      {/* BG Text */}
      <div className="tok-bg-text tok-bg-left font-impact">LEGO</div>
      <div className="tok-bg-text tok-bg-right font-impact">BUILD</div>

      {/* Brackets */}
      <div className="bracket br-tr"></div>
      <div className="bracket br-bl"></div>

      {/* Floating stickers */}
      <div className="floating-sticker" style={{ top: '10%', left: '6%', fontSize: '2.8rem', animation: 'stickerFloat 4s ease-in-out infinite', animationDelay: '0.3s' }}>📊</div>
      <div className="floating-sticker" style={{ top: '15%', right: '7%', fontSize: '2.5rem', animation: 'stickerBounce 3.5s ease-in-out infinite', animationDelay: '0.8s' }}>💸</div>
      <div className="floating-sticker" style={{ bottom: '15%', left: '5%', fontSize: '3rem', animation: 'stickerPop 5s ease-in-out infinite', animationDelay: '1.2s' }}>🧱</div>
      <div className="floating-sticker" style={{ bottom: '12%', right: '6%', fontSize: '2.6rem', animation: 'stickerSpin 4.5s ease-in-out infinite', animationDelay: '0.5s' }}>📈</div>
      <div className="floating-sticker" style={{ top: '50%', right: '3%', fontSize: '2.2rem', animation: 'stickerFloat 5s ease-in-out infinite', animationDelay: '1.8s' }}>🪙</div>

      <div className="tok-container">
        {/* Section Header */}
        <div className="tok-header animate-in">
          <div className="hazard">
            {[...Array(6)].map((_, i) => <div key={i}></div>)}
          </div>
          <h2 className="tok-title font-impact">Tokenomics</h2>
          <p className="tok-subtitle">Live data from DexScreener</p>
        </div>

        {/* Orbital layout */}
        <div className="tok-orbital">
          {/* Left stats */}
          <div className="tok-stats-col tok-stats-left">
            {stats.slice(0, 3).map((stat, i) => (
              <div
                key={i}
                className="hud-stat animate-in"
                style={{
                  borderLeftColor: stat.color,
                  animationDelay: `${i * 0.1}s`
                }}
              >
                <span className="hud-stat-label">{stat.label}</span>
                <span className="hud-stat-value">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Center tokenomics illustration */}
          <div className="tok-center animate-in">
            <div className="hud-ring"></div>
            <div className="hud-ring-inner"></div>
            <div className="tok-scan-line"></div>
            <img
              src={tokenomicsImg}
              alt="LEGO Tokenomics"
              className="tok-mascot"
            />
          </div>

          {/* Right stats */}
          <div className="tok-stats-col tok-stats-right">
            {stats.slice(3, 6).map((stat, i) => (
              <div
                key={i}
                className="hud-stat hud-stat-right animate-in"
                style={{
                  borderRightColor: stat.color,
                  animationDelay: `${(i + 3) * 0.1}s`
                }}
              >
                <span className="hud-stat-label">{stat.label}</span>
                <span className="hud-stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supply info */}
        <div className="tok-supply animate-in">
          <div className="tok-supply-item">
            <span className="tok-supply-label">Total Supply</span>
            <span className="tok-supply-value font-impact">1,000,000,000</span>
          </div>
          <div className="tok-supply-divider"></div>
          <div className="tok-supply-item">
            <span className="tok-supply-label">Tax</span>
            <span className="tok-supply-value font-impact">0% / 0%</span>
          </div>
          <div className="tok-supply-divider"></div>
          <div className="tok-supply-item">
            <span className="tok-supply-label">Network</span>
            <span className="tok-supply-value font-impact">Solana</span>
          </div>
        </div>
      </div>
    </section>
  );
}
