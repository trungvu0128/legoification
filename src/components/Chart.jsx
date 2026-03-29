import './Chart.css';

export default function Chart({ token }) {
  return (
    <section className="chart" id="chart">
      {/* BG Text */}
      <div className="chart-bg-text chart-bg-left font-impact">CHART</div>

      {/* Brackets */}
      <div className="bracket br-tl"></div>
      <div className="bracket br-br"></div>

      <div className="chart-container">
        <div className="chart-header animate-in">
          <div className="chart-header-left">
            <h2 className="chart-title font-impact">Live Chart</h2>
            <div className="chart-price-pill">
              <span className="chart-price-dot"></span>
              <span className="chart-price-val">{token.price}</span>
              <span className={`chart-price-change ${token.priceChange24h.startsWith('+') ? 'green' : 'red'}`}>
                {token.priceChange24h}
              </span>
            </div>
          </div>
        </div>

        <div className="chart-embed animate-in">
          <iframe
            src={`https://dexscreener.com/solana/${token.pairAddress}?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15`}
            title="DexScreener Chart"
            className="chart-iframe"
          />
        </div>
      </div>
    </section>
  );
}
