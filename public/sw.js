if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"d102ce5819b39cce834961bca8869d70"},{url:"/_next/static/chunks/27-2a6fbf665e0411c6.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/864-4a979332dff86894.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/app/_not-found-be6954023b538636.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/app/layout-9c9e8a32169d479b.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/app/page-9ab76eb1aa2ec04e.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/fd9d1056-e4abb10dc68a7173.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/main-app-46b97c24f903955c.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/main-b360ecd0d5b50a8b.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0e27a798b894b221.js",revision:"dY2jSO1asyeObwDbFMtnt"},{url:"/_next/static/css/a637126b89a09e8c.css",revision:"a637126b89a09e8c"},{url:"/_next/static/dY2jSO1asyeObwDbFMtnt/_buildManifest.js",revision:"ae9eef61ecb4f32528f2e03fce5305d0"},{url:"/_next/static/dY2jSO1asyeObwDbFMtnt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/634216363f5c73c1-s.p.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/education.jpg",revision:"bf1a21d69492dc7c6f01c68c0d847880"},{url:"/images/icons/icon-128x128.png",revision:"4e1b617d32e3c9470cbe243a0f1f1684"},{url:"/images/icons/icon-144x144.png",revision:"42208f4ac2c08268cfc5309c65b60de2"},{url:"/images/icons/icon-152x152.png",revision:"22b9f8c93293cfc532a6312f631546a6"},{url:"/images/icons/icon-192x192.png",revision:"af83e85a3556cf60cf7402b0250ce3b8"},{url:"/images/icons/icon-384x384.png",revision:"af83e85a3556cf60cf7402b0250ce3b8"},{url:"/images/icons/icon-512x512.png",revision:"c66ffe691c4f0ffb4d37705357098f1c"},{url:"/images/icons/icon-72x72.png",revision:"992e080df2af0c1e62ef03014c6c534f"},{url:"/images/icons/icon-96x96.png",revision:"d8b996c1ae144e2e098c56a5accd6fcf"},{url:"/manifest.json",revision:"39db148760866c1ebaa73df2749568b1"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
