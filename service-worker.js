if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const c=e=>i(e,r),u={module:{uri:r},exports:l,require:c};s[r]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(o(...e),l)))}}define(["./workbox-74eda642"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9829327e2b372c7b6b5b288e1f4bc28b"},{url:"assets/About.e63ca7b6.js",revision:null},{url:"assets/Changelog.61cf1caf.js",revision:null},{url:"assets/de.06b07382.js",revision:null},{url:"assets/en.ece06088.js",revision:null},{url:"assets/Home.7b4d9f82.js",revision:null},{url:"assets/Home.f5ac59d9.css",revision:null},{url:"assets/index.87992890.js",revision:null},{url:"assets/index.9be9692b.css",revision:null},{url:"assets/logo.3c55c010.js",revision:null},{url:"assets/logo.5e6b8142.png",revision:null},{url:"assets/NotFound.51bda8b7.js",revision:null},{url:"assets/Settings.bc019311.js",revision:null},{url:"assets/SettingsContainer.860ab2aa.js",revision:null},{url:"img/icons/android-chrome-192x192.png",revision:"38ce90998cf9b499d77e3691774f23fc"},{url:"img/icons/android-chrome-512x512.png",revision:"f99d40c974ec054110b63ad595d23999"},{url:"img/icons/apple-touch-icon.png",revision:"c8cce5d4630b844ffda534cc0a4501ee"},{url:"img/icons/favicon-16x16.png",revision:"41d99be50dd392fad9006515d9b7f6df"},{url:"img/icons/favicon-32x32.png",revision:"156b617fe38e22401aebefd8eb299a06"},{url:"img/icons/mstile-150x150.png",revision:"8b7f980b55adac4cf86218daf19e82b0"},{url:"index.html",revision:"1ec283fe92117468e42569f53ab58edf"},{url:"favicon.ico",revision:"cac8b75e6ac4b8b581c5a4640bc28043"},{url:"./img/icons/android-chrome-192x192.png",revision:"38ce90998cf9b499d77e3691774f23fc"},{url:"img/icons/android-chrome-512x512.png",revision:"f99d40c974ec054110b63ad595d23999"},{url:"manifest.webmanifest",revision:"e455911964ff8360dbb4af969e40c7f8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
