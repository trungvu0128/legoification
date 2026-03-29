import './Lore.css';

export default function Lore({ token }) {
  return (
    <section className="lore" id="lore">
      {/* BG Text */}
      <div className="lore-bg-text lore-bg-left font-impact">CHAOS</div>
      <div className="lore-bg-text lore-bg-right font-impact">EMPIRE</div>

      {/* Brackets */}
      <div className="bracket br-tl"></div>
      <div className="bracket br-br"></div>

      {/* Floating stickers */}
      <div className="floating-sticker" style={{ top: '8%', right: '8%', fontSize: '3rem', animation: 'stickerFloat 4.5s ease-in-out infinite', animationDelay: '0.2s' }}>⚔️</div>
      <div className="floating-sticker" style={{ bottom: '10%', left: '5%', fontSize: '2.8rem', animation: 'stickerBounce 3.5s ease-in-out infinite', animationDelay: '1s' }}>🌍</div>
      <div className="floating-sticker" style={{ top: '50%', left: '3%', fontSize: '2.4rem', animation: 'stickerPop 5s ease-in-out infinite', animationDelay: '0.6s' }}>🗿</div>
      <div className="floating-sticker" style={{ bottom: '20%', right: '5%', fontSize: '2.6rem', animation: 'stickerSpin 4s ease-in-out infinite', animationDelay: '1.5s' }}>👑</div>
      <div className="lore-container">
        <div className="lore-grid">
          {/* Left: Image */}
          <div className="lore-image-wrap animate-in">
            <img
              src={token.imageUrl}
              alt="LEGO Character"
              className="lore-image"
            />
          </div>

          {/* Right: Text */}
          <div className="lore-text-col animate-in">
            <div className="hazard">
              {[...Array(5)].map((_, i) => <div key={i}></div>)}
            </div>

            <h2 className="lore-title font-impact">
              The LEGO<br />Uprising
            </h2>

            <p className="lore-paragraph">
              In a world where politicians play chess with nations and billionaires
              build empires, one LEGO man decided to build his own — brick by brick,
              block by block, on the Solana blockchain.
            </p>

            <p className="lore-paragraph">
              Born from the chaos of geopolitics, minted in the fires of meme culture,
              <strong> $LEGO</strong> isn't just a token. It's a movement. A declaration
              that the degens, the builders, the absolute madlads — they're the ones
              who truly shape the world.
            </p>

            <p className="lore-paragraph lore-highlight">
              "Stop Being Poor" isn't just a shirt. It's a manifesto.
            </p>

            <a
              href={token.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="lore-cta font-impact"
            >
              Join the Movement →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
