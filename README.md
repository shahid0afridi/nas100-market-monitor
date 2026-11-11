# NAS100 Market Monitor (personal-use starter)

## Files
- `index.html`: dashboard
- `manifest.webmanifest`, `sw.js`, `icon-*.png`: installable PWA shell

## Data
Uses Finnhub `/api/v1/quote` for NVDA, MSFT, AAPL, AMZN, META, GOOGL, AVGO, TSLA, QQQ and SPY.
The app refreshes approximately once per minute (10 quote calls per refresh).

## Important
- Personal-use prototype only. Check Finnhub's current plan terms and exchange data permissions before use.
- The API key is entered into the browser and stored in that browser's localStorage. It is not included in these source files, but a user can inspect their own browser network requests.
- Do not share the key, publish it in code, or use this starter as a public/commercial market-data service.
- QQQ and SPY are ETF proxies, not your broker's NAS100 CFD quote.
- Macro indicators link out to TradingView. The breadth calculation is equal-weighted and does not estimate each constituent's true NASDAQ-100 index contribution.
- Quotes may be unavailable outside market hours or depending on your Finnhub account permissions.

## Publish on GitHub Pages
1. Create a public repository named `nas100-market-monitor`.
2. Upload all files from this folder to the repository root.
3. Open repository Settings -> Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Choose `main` and `/ (root)`, then Save.
6. Wait for deployment and open the published Pages URL.

## Add to iPhone
1. Open the published URL in Safari (not an in-app browser).
2. Tap Share -> Add to Home Screen.
3. Enable "Open as Web App" if shown, then tap Add.
4. Open the new Home Screen icon, paste your Finnhub API key into Connect market data, and save.

## Notes
This is an informational dashboard, not a trading signal or investment advice.
