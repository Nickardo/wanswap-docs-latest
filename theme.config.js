export default {
  repository: 'https://github.com/wanswap/wanswap-docs',
  titleSuffix: ' – WanSwap Docs',
  logo: (
    <>
      <img src="/wanswap10x10.png"/>
      <span style={{fontSize:22}} className="mr-2 ml-2 font-extrabold hidden md:inline">WanSwap</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        DOCUMENTS
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="WanSwap is a Cross-chain AMM DEX built on WanChain, enabling high speed transactions with low gas fees" />
      <meta name="og:description" content="WanSwap is a Cross-chain AMM DEX built on WanChain, enabling high speed transactions with low gas fees" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="meta.png" />
      <meta name="twitter:site:domain" content="wanswap.finance" />
      <meta name="twitter:url" content="https://twitter.com/wanswap" />
      <meta name="og:title" content="WanSwap: Documentation" />
      <meta name="og:image" content="meta.png" />
      <meta name="apple-mobile-web-app-title" content="WanSwap docs" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png"/>
      
      <link rel="icon" type="image/png" href="/favicon.png"/>
      <meta name="msapplication-TileImage" content="/favicon.png"/>
	
    </>
  ),
  i18n: [
	  { locale: 'en', text: 'English' },
	  { locale: 'zh', text: '中文' },
	  { locale: 'fr', text: 'Français' },
	  { locale: 'tr', text: 'Türkçe' },
	],
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>{new Date().getFullYear()} © WanSwap Crew</>
}
