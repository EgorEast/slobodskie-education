if (!self.define) {
  let e,
    s = {}
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    s[i] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = i), (e.onload = s), document.head.appendChild(e)
        } else (e = i), importScripts(i), s()
      }).then(() => {
        let e = s[i]
        if (!e) throw new Error(`Module ${i} didn’t register its module`)
        return e
      })
  )
  self.define = (n, a) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[c]) return
    let o = {}
    const t = e => i(e, c),
      r = { module: { uri: c }, exports: o, require: t }
    s[c] = Promise.all(n.map(e => r[e] || t(e))).then(e => (a(...e), o))
  }
}
define(['./workbox-50de5c5d'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: '531c211babb054550205febc045a8a6a' },
        {
          url: '/_next/static/bw5gos3AL2kSFmvrwogEN/_buildManifest.js',
          revision: '092d94667be113fbc5a7e16b927e9e6e',
        },
        {
          url: '/_next/static/bw5gos3AL2kSFmvrwogEN/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/138-fef37257d3d5c816.js', revision: 'bw5gos3AL2kSFmvrwogEN' },
        { url: '/_next/static/chunks/197-01cca435c027c919.js', revision: 'bw5gos3AL2kSFmvrwogEN' },
        { url: '/_next/static/chunks/23-b29ff9681e99b7f6.js', revision: 'bw5gos3AL2kSFmvrwogEN' },
        { url: '/_next/static/chunks/535-bb1b3f4e634e666c.js', revision: 'bw5gos3AL2kSFmvrwogEN' },
        { url: '/_next/static/chunks/648-cdce7d89a8536949.js', revision: 'bw5gos3AL2kSFmvrwogEN' },
        { url: '/_next/static/chunks/675-6329c174240f0475.js', revision: 'bw5gos3AL2kSFmvrwogEN' },
        {
          url: '/_next/static/chunks/app/_not-found/page-c3d7bfc1806ec87c.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/app/hello/(id-s)/%5B...ids%5D/page-493d5c4d57654aa4.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/app/hello/(id-s)/%5Bid%5D/page-ff89526bba76756a.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/app/hello/(id-s)/2/page-2383e84f94fac4cc.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/app/hello/page-0537e5d2715a174b.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/app/layout-c4f7266d4ff1303b.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/app/page-78b21939c897017d.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/fd9d1056-2737f78bfff3f6bf.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/framework-d768728cf5cbcf7a.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        { url: '/_next/static/chunks/main-8e60aa504ac1696b.js', revision: 'bw5gos3AL2kSFmvrwogEN' },
        {
          url: '/_next/static/chunks/main-app-242512e981347310.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/pages/hello-page-44a18853199d209f.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/pages/hello-page/ui-10f4a8508df14d4b.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/pages/hello-page/ui/hello-page-193d69af6e0b018a.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/pages/home-page-a10ae468a634e310.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/pages/home-page/ui-af08f019e18ff99c.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/pages/home-page/ui/home-page-f8871ae22ce0171d.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-c7a76889aa1d3752.js',
          revision: 'bw5gos3AL2kSFmvrwogEN',
        },
        { url: '/_next/static/css/32dd5d7227119581.css', revision: '32dd5d7227119581' },
        {
          url: '/_next/static/media/634216363f5c73c1-s.p.woff2',
          revision: '4a1bf14c88bdef173c2a39c5c60e65ce',
        },
        {
          url: '/_next/static/media/88325a2c1fede2f4-s.woff2',
          revision: '93131c3ec4fe9782c2c40a708db9b0b6',
        },
        {
          url: '/_next/static/media/aec774cbe1963439-s.woff2',
          revision: '37f8885214448afc8f3b3678db525598',
        },
        {
          url: '/_next/static/media/d83fe381bb17eb77-s.woff2',
          revision: '215b11e73137fdb7d9a773e0211c29d6',
        },
        {
          url: '/_next/static/media/e1c529c04de64b40-s.p.woff2',
          revision: 'e88b1871ed8eef59b7df05a91a6f2157',
        },
        { url: '/images/education.jpg', revision: 'bf1a21d69492dc7c6f01c68c0d847880' },
        { url: '/images/icons/icon-128x128.png', revision: '4e1b617d32e3c9470cbe243a0f1f1684' },
        { url: '/images/icons/icon-144x144.png', revision: '42208f4ac2c08268cfc5309c65b60de2' },
        { url: '/images/icons/icon-152x152.png', revision: '22b9f8c93293cfc532a6312f631546a6' },
        { url: '/images/icons/icon-192x192.png', revision: 'af83e85a3556cf60cf7402b0250ce3b8' },
        { url: '/images/icons/icon-384x384.png', revision: '2f57b5497ee1299987f5757f34ad9d1c' },
        { url: '/images/icons/icon-512x512.png', revision: 'c66ffe691c4f0ffb4d37705357098f1c' },
        { url: '/images/icons/icon-72x72.png', revision: '992e080df2af0c1e62ef03014c6c534f' },
        { url: '/images/icons/icon-96x96.png', revision: 'd8b996c1ae144e2e098c56a5accd6fcf' },
        { url: '/images/icons/maskable_icon.png', revision: 'afa55f4e7ec8c523e9c89f394deeae92' },
        {
          url: '/images/icons/maskable_icon_x128.png',
          revision: '2d15e38baa80a5769de328ceaa4b5e02',
        },
        {
          url: '/images/icons/maskable_icon_x192.png',
          revision: '225fd8e31dd34e018a1fcdafc18b0b7f',
        },
        {
          url: '/images/icons/maskable_icon_x72.png',
          revision: '9305d5261cd6b49e32f7dfee893ad8a6',
        },
        {
          url: '/images/icons/maskable_icon_x96.png',
          revision: '500c69a45b53536e366e9c8a698c8768',
        },
        { url: '/manifest.json', revision: '333acebb467ff5b7dd205352e95a3f3e' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/service-worker.js', revision: '09da6dfc281012a2689ef82364935141' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: i, state: n }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    )
})
