if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),u={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-74eda642"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9829327e2b372c7b6b5b288e1f4bc28b"},{url:"assets/About.bc5e68b9.js",revision:null},{url:"assets/Changelog.a208e3c2.js",revision:null},{url:"assets/de.06b07382.js",revision:null},{url:"assets/en.ece06088.js",revision:null},{url:"assets/Home.54fa744f.css",revision:null},{url:"assets/Home.bbcc5590.js",revision:null},{url:"assets/index.196b8182.js",revision:null},{url:"assets/index.9be9692b.css",revision:null},{url:"assets/logo.3c55c010.js",revision:null},{url:"assets/logo.5e6b8142.png",revision:null},{url:"assets/Map.33b72a01.js",revision:null},{url:"assets/Map.dca91701.css",revision:null},{url:"assets/NotFound.b8e9637e.js",revision:null},{url:"assets/Settings.9f7f7e7e.js",revision:null},{url:"assets/SettingsContainer.6e35bf24.js",revision:null},{url:"img/icons/android-chrome-192x192.png",revision:"38ce90998cf9b499d77e3691774f23fc"},{url:"img/icons/android-chrome-512x512.png",revision:"f99d40c974ec054110b63ad595d23999"},{url:"img/icons/apple-touch-icon.png",revision:"c8cce5d4630b844ffda534cc0a4501ee"},{url:"img/icons/favicon-16x16.png",revision:"41d99be50dd392fad9006515d9b7f6df"},{url:"img/icons/favicon-32x32.png",revision:"156b617fe38e22401aebefd8eb299a06"},{url:"img/icons/mstile-150x150.png",revision:"8b7f980b55adac4cf86218daf19e82b0"},{url:"index.html",revision:"bea75a416290400b3e22b53dccca7c77"},{url:"favicon.ico",revision:"cac8b75e6ac4b8b581c5a4640bc28043"},{url:"./img/icons/android-chrome-192x192.png",revision:"38ce90998cf9b499d77e3691774f23fc"},{url:"img/icons/android-chrome-512x512.png",revision:"f99d40c974ec054110b63ad595d23999"},{url:"manifest.webmanifest",revision:"e455911964ff8360dbb4af969e40c7f8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
