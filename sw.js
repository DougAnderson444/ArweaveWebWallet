if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AddWallet.3d3cf748.js",revision:"96a9c2add0cf02c718a72d9d52108ba4"},{url:"assets/AddWallet.cc3e163e.css",revision:"0337ed76f0a58b521518ff25c4d0b4a9"},{url:"assets/Connect.56c7bbb7.css",revision:"85977d008b1b6bf2007b6887966d9871"},{url:"assets/Connect.6ab4dc30.js",revision:"037983698860ca34bf024620faddf463"},{url:"assets/Connector.036ba09b.css",revision:"5a394f0028ab35f106aedb1ddefb7f9c"},{url:"assets/Connector.8d0f22f3.js",revision:"2619a6605f06bb255881c1f64ab16d86"},{url:"assets/EditWallet.4123f1f8.css",revision:"41ed02edc78cf1f9cd591ca0f273f18d"},{url:"assets/EditWallet.c2ba1ec3.js",revision:"d2aeda81698db65c1560f5edfe55510a"},{url:"assets/index.058862bb.css",revision:"120d55d091140c9b06c45532ae5d2649"},{url:"assets/index.076e250a.js",revision:"c3022a07f577d43f8188898c697ae57f"},{url:"assets/Profile.43a51050.js",revision:"d9acb7c031d9b2fec15e96222561704a"},{url:"assets/Profile.a7ece652.css",revision:"d7dea7bf6d359253309ff1caef56c4ac"},{url:"assets/Settings.64129c8b.css",revision:"a2a4f06f98221d851adfeabdd6cbba4d"},{url:"assets/Settings.6d690458.js",revision:"adb1167e284613f198c4e5a22fb8d1c9"},{url:"assets/Tx.79eb55c7.js",revision:"3b9fd76c6c3196b2ceed515fa9c73c70"},{url:"assets/Tx.a998db47.css",revision:"7fd6fdfab68c922978c9a637e962f459"},{url:"assets/vendor.1c1e6812.js",revision:"faa3cae12990a6d6069495939ab16039"},{url:"assets/WalletOptions.1a3ddf66.css",revision:"62119631b99a895e14eec3ef552ba2c8"},{url:"assets/WalletOptions.6cab91dd.js",revision:"6017eb0ae4bb2570a95279f99a25129f"},{url:"assets/Welcome.0dbdd98f.js",revision:"0ef23758a2834128aa1118859af2c192"},{url:"assets/Welcome.6ad86669.css",revision:"495c19c25fd89e86ecef4825627f713a"},{url:"index.html",revision:"cb32e6b2a0590ec9a8674550c39c7b51"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
