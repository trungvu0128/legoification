import { Wallet, ArrowRightLeft, TrendingUp, Rocket } from 'lucide-react';
import howtobuyImg from '../assets/howtobuy.jpg';
import './HowToBuy.css';

const STEPS = [
  {
    icon: Wallet,
    step: '01',
    title: 'Get a Wallet',
    desc: 'Download Phantom or Solflare wallet. Fund it with SOL from any exchange.',
  },
  {
    icon: ArrowRightLeft,
    step: '02',
    title: 'Go to Pump.fun',
    desc: 'Navigate to pump.fun — the launchpad for Solana meme coins. Find $LEGO or paste the CA.',
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Swap for $LEGO',
    desc: 'Paste the $LEGO contract address, set your amount, and swap SOL for $LEGO.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'HODL & Build',
    desc: 'Welcome to LEGOFICATION. Now sit back, hold your bricks, and watch the empire grow.',
  },
];

export default function HowToBuy({ token }) {
  return (
    <section className="how-to-buy" id="how-to-buy">
      {/* BG Text */}
      <div className="htb-bg-text htb-bg-left font-impact">BUY</div>
      <div className="htb-bg-text htb-bg-right font-impact">HODL</div>

      {/* Brackets */}
      <div className="bracket br-tr"></div>
      <div className="bracket br-bl"></div>

      {/* Floating stickers */}
      <div className="floating-sticker" style={{ top: '5%', left: '7%', fontSize: '3rem', animation: 'stickerBounce 4s ease-in-out infinite', animationDelay: '0.4s' }}>🛒</div>
      <div className="floating-sticker" style={{ top: '8%', right: '6%', fontSize: '2.6rem', animation: 'stickerFloat 3.5s ease-in-out infinite', animationDelay: '0.9s' }}>💳</div>
      <div className="floating-sticker" style={{ bottom: '8%', left: '4%', fontSize: '2.8rem', animation: 'stickerSpin 5s ease-in-out infinite', animationDelay: '1.3s' }}>🎯</div>
      <div className="floating-sticker" style={{ bottom: '10%', right: '5%', fontSize: '2.5rem', animation: 'stickerPop 4.5s ease-in-out infinite', animationDelay: '0.7s' }}>🏆</div>
      <div className="htb-container">
        <div className="htb-header animate-in">
          <div className="hazard">
            {[...Array(6)].map((_, i) => <div key={i}></div>)}
          </div>
          <h2 className="htb-title font-impact">How to Buy</h2>
          <p className="htb-subtitle">4 simple steps to join the revolution</p>
        </div>

        {/* Image with content overlaid */}
        <div className="htb-hero animate-in">
          <img src={howtobuyImg} alt="How to Buy LEGO" className="htb-hero-img" />
          <div className="htb-hero-overlay"></div>

          <div className="htb-hero-content">
            <div className="htb-grid">
              {STEPS.map((s, i) => (
                <div key={i} className="htb-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="htb-card-top">
                    <span className="htb-step-num font-impact">{s.step}</span>
                    <s.icon size={28} className="htb-icon" />
                  </div>
                  <h3 className="htb-card-title font-impact">{s.title}</h3>
                  <p className="htb-card-desc">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="htb-cta-wrap">
              <a
                href={`https://pump.fun/coin/${token.ca}`}
                target="_blank"
                rel="noopener noreferrer"
                className="htb-cta-btn font-impact"
              >
                Buy $LEGO on Pump.fun →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
