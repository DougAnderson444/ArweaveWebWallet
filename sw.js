if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const b=e=>c(e,r),f={module:{uri:r},exports:d,require:b};s[r]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(i(...e),d)))}}define(["./workbox-21445d85"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AddWallet.16bd2e9d.js",revision:"106c444b97218cc59cde89765de12918"},{url:"assets/AddWallet.c2a5d005.css",revision:"dded523f085df36b91666b4d69680ab9"},{url:"assets/Connect.596915ac.js",revision:"28d4ce149e31ecf708513fe8c959e12c"},{url:"assets/Connect.ea795ab9.css",revision:"3be6f02b9ce2e3585f7c66d55c540983"},{url:"assets/Connector.036ba09b.css",revision:"5a394f0028ab35f106aedb1ddefb7f9c"},{url:"assets/Connector.a8cd0bc0.js",revision:"6935e011bd38cfe96c727c1f6a2d4b8a"},{url:"assets/EditWallet.246706cc.css",revision:"76ec6e426ea440ec6c54a1299594928b"},{url:"assets/EditWallet.81096b09.js",revision:"8a9d02b5dcc4139a986bd7cf98ef5ed2"},{url:"assets/index.4558a2c8.js",revision:"b9f75d9bb055316a993905949306d672"},{url:"assets/index.62c2e622.css",revision:"4044aeb8e8f01a4c9199cfff341c22bb"},{url:"assets/Profile.2390d207.js",revision:"fc8beb467e8724bbca2c6aa061a81cdf"},{url:"assets/Profile.25b0bf5c.css",revision:"a53982ab33c03441468f800646471006"},{url:"assets/Settings.7d44a1d4.js",revision:"1d06e336b500e60fd723d14bfc06a088"},{url:"assets/Settings.f236df29.css",revision:"b79af4e0f620c08fb59c009693c5103a"},{url:"assets/Tx.b589d40b.css",revision:"f63afdd415dd69030c79e6c5d8b316a2"},{url:"assets/Tx.fea61424.js",revision:"c98b6b4ac40e77f9c03b6cf773544fa7"},{url:"assets/vendor.4798f9ea.js",revision:"278760d52ecdc787920b3e11ec75c712"},{url:"assets/WalletOptions.3d23dabf.js",revision:"47345c7ee4c05bda4876941b678a14df"},{url:"assets/WalletOptions.682b1252.css",revision:"0da43bdc858b3a405e601f0432ec45a2"},{url:"assets/Welcome.3100a6a0.js",revision:"ba01fa8a8ebc2ca7ab0f8c9e8efbf966"},{url:"assets/Welcome.b0da1a4e.css",revision:"5c444f092429ccd47b56c40d41c863cd"},{url:"index.html",revision:"eae337b3c5403674f53b1819c8e41ee8"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
