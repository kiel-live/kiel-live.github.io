if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const l=e=>i(e,r),t={module:{uri:r},exports:c,require:l};s[r]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-cd63daf5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"53f3976d6ed6ef7060481877fda75885"},{url:"assets/About-PuywA62x.js",revision:null},{url:"assets/Changelog-5mLFBIkF.js",revision:null},{url:"assets/Contact-w1z-jXXH.js",revision:null},{url:"assets/de-GZMmBjBD.js",revision:null},{url:"assets/en-t_K36liO.js",revision:null},{url:"assets/Home-437W_v9L.js",revision:null},{url:"assets/Home-kezBv0qE.css",revision:null},{url:"assets/index-B1V65gbn.css",revision:null},{url:"assets/index-bqOBRSFv.js",revision:null},{url:"assets/logo-2flPyEtk.js",revision:null},{url:"assets/logo-gz9BJtrJ.png",revision:null},{url:"assets/NotFound-hj55-8Im.js",revision:null},{url:"assets/Settings-pakdyQPl.js",revision:null},{url:"assets/SettingsContainer-JI5uXRs9.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"icons/stop-bike-selected.png",revision:"c1af5ed8a5bc34f5a4f1529b24826c37"},{url:"icons/stop-bike.png",revision:"02c530974dccdef6e4a432626b9c60f6"},{url:"icons/stop-bus-selected.png",revision:"f4b3741a96d4cff1767583c8beaf4c42"},{url:"icons/stop-bus.png",revision:"9d273453641c3614f8a5a22a11f61096"},{url:"icons/stop-train-selected.png",revision:"36e661d463609393c814bea06edc296a"},{url:"icons/stop-train.png",revision:"79297c6cf434c714d843934dd1acce2e"},{url:"icons/stop-tram-selected.png",revision:"fd940f3221858f9671e7d4b518b47f5c"},{url:"icons/stop-tram.png",revision:"71bd6b75e49a079fb1824351e2033cef"},{url:"icons/vehicle-escooter-selected.png",revision:"2715ddf8343a33a39d8285b402c275fb"},{url:"icons/vehicle-escooter.png",revision:"14a4056c515b59b1240a68b8656c92ab"},{url:"img/icons/android-chrome-192x192.png",revision:"38ce90998cf9b499d77e3691774f23fc"},{url:"img/icons/android-chrome-512x512.png",revision:"f99d40c974ec054110b63ad595d23999"},{url:"img/icons/apple-touch-icon.png",revision:"c8cce5d4630b844ffda534cc0a4501ee"},{url:"img/icons/favicon-16x16.png",revision:"41d99be50dd392fad9006515d9b7f6df"},{url:"img/icons/favicon-32x32.png",revision:"156b617fe38e22401aebefd8eb299a06"},{url:"img/icons/mstile-150x150.png",revision:"8b7f980b55adac4cf86218daf19e82b0"},{url:"index.html",revision:"63aeca38a7d206d47e53000e71857780"},{url:"favicon.ico",revision:"cac8b75e6ac4b8b581c5a4640bc28043"},{url:"./img/icons/android-chrome-192x192.png",revision:"38ce90998cf9b499d77e3691774f23fc"},{url:"img/icons/android-chrome-512x512.png",revision:"f99d40c974ec054110b63ad595d23999"},{url:"manifest.webmanifest",revision:"e455911964ff8360dbb4af969e40c7f8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
