import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import Tokenomics from './components/Tokenomics';
import Lore from './components/Lore';
import HowToBuy from './components/HowToBuy';
import Chart from './components/Chart';
import Footer from './components/Footer';

const DEFAULTS = {
  ca: 'EKGQrjPnQEvtY2nVNCt9x34V6C4GUB9hJTu3BLPpump',
  price: '$0.00004857',
  volume: '$181.9K',
  mcap: '$48.6K',
  liquidity: '$17.1K',
  buys24h: '2,902',
  sells24h: '1,835',
  priceChange24h: '+43.1%',
  pairAddress: '8DKvCJBTnSDe8sM7sDrV2AAUjRivELEkcpLBSXT3DkHp',
  bannerUrl: 'https://cdn.dexscreener.com/cms/images/5APN5ZNGdLaUHBPs?width=1500&height=500&quality=95&format=auto',
  imageUrl: 'https://cdn.dexscreener.com/cms/images/GtiAk0yX08zVSJKj?width=800&height=800&quality=95&format=auto',
  name: 'LEGOFICATION',
  symbol: 'LEGO',
  twitter: 'https://x.com/LEGOFICATION',
  tiktok: 'https://www.tiktok.com/@akhbarenfejari',
  youtube: 'https://youtu.be/wo7e2OjyEBo?is=xLlT-IWIBCrX0uAt',
};

function formatNum(n, decimals = 2) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(decimals)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(decimals)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(decimals)}K`;
  return `$${Number(n).toLocaleString()}`;
}

function useLiveToken() {
  const [token, setToken] = useState(DEFAULTS);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://api.dexscreener.com/latest/dex/tokens/${DEFAULTS.ca}`)
        .then(r => r.json())
        .then(data => {
          const pair = data?.pairs?.[0];
          if (!pair) return;
          const buys = pair.txns?.h24?.buys || 0;
          const sells = pair.txns?.h24?.sells || 0;
          const priceChange = pair.priceChange?.h24 ?? 0;
          setToken(prev => ({
            ...prev,
            price: `$${Number(pair.priceUsd).toFixed(8)}`,
            volume: formatNum(pair.volume?.h24 || 0),
            mcap: formatNum(pair.fdv || pair.marketCap || 0),
            liquidity: formatNum(pair.liquidity?.usd || 0),
            buys24h: buys.toLocaleString(),
            sells24h: sells.toLocaleString(),
            priceChange24h: `${priceChange >= 0 ? '+' : ''}${priceChange.toFixed(1)}%`,
            pairAddress: pair.pairAddress || DEFAULTS.pairAddress,
          }));
        })
        .catch(() => { });
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return token;
}

function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const token = useLiveToken();
  useScrollAnimations();

  return (
    <>
      <Header token={token} />
      <Hero token={token} />
      <TickerBar />
      <Tokenomics token={token} />
      <Lore token={token} />
      <HowToBuy token={token} />
      <Chart token={token} />
      <Footer token={token} />
    </>
  );
}
