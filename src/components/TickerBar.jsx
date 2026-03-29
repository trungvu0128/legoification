import './TickerBar.css';

const ITEMS = [
  'STOP BEING POOR 🧱',
  '$LEGO TO THE MOON 🚀',
  'BUILD YOUR EMPIRE 🏗️',
  'DON\'T TREAD ON ME 🐍',
  'LEGOFICATION ERA 🔥',
  'BRICK BY BRICK 🧱',
  'SOLANA POWERED ⚡',
  'CHAOS IS A LADDER 📈',
  'STOP BEING POOR 🧱',
  '$LEGO TO THE MOON 🚀',
  'BUILD YOUR EMPIRE 🏗️',
  'DON\'T TREAD ON ME 🐍',
  'LEGOFICATION ERA 🔥',
  'BRICK BY BRICK 🧱',
  'SOLANA POWERED ⚡',
  'CHAOS IS A LADDER 📈',
];

export default function TickerBar() {
  return (
    <div className="ticker-bar">
      <div className="ticker-track">
        {ITEMS.map((item, i) => (
          <span key={i} className="ticker-item font-impact">{item}</span>
        ))}
      </div>
    </div>
  );
}
