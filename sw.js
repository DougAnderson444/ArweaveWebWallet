if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const b=e=>a(e,r),f={module:{uri:r},exports:d,require:b};s[r]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(i(...e),d)))}}define(["./workbox-21445d85"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AddWallet.46060998.js",revision:"adf84cf2db10d48d6a4f188dc8ae5e5e"},{url:"assets/AddWallet.791e90da.css",revision:"3ace531a62e574ecb14c55edef6345aa"},{url:"assets/Connect.27299d8a.js",revision:"af235dd72210e3dd1ff393499bb0aaef"},{url:"assets/Connect.ea795ab9.css",revision:"3be6f02b9ce2e3585f7c66d55c540983"},{url:"assets/Connector.036ba09b.css",revision:"5a394f0028ab35f106aedb1ddefb7f9c"},{url:"assets/Connector.98c25575.js",revision:"17cdf8fc687b49422c1c018d988c239d"},{url:"assets/EditWallet.246706cc.css",revision:"76ec6e426ea440ec6c54a1299594928b"},{url:"assets/EditWallet.367971a1.js",revision:"bf10be611d1f29cb09589d1b868e1a37"},{url:"assets/index.1832f254.js",revision:"35a156a15c341b8f565d13b4fb237a71"},{url:"assets/index.31197d52.css",revision:"c4ae3b0061da70ba8c384d853611457b"},{url:"assets/Profile.072f3376.js",revision:"e54bb6ed9c6959ad8bf619c4684ad806"},{url:"assets/Profile.25b0bf5c.css",revision:"a53982ab33c03441468f800646471006"},{url:"assets/Settings.48e67fdb.js",revision:"ebe7e04dbc12f4a0e22ebe17fbbe8f0a"},{url:"assets/Settings.f236df29.css",revision:"b79af4e0f620c08fb59c009693c5103a"},{url:"assets/Tx.b589d40b.css",revision:"f63afdd415dd69030c79e6c5d8b316a2"},{url:"assets/Tx.e8acfbff.js",revision:"ebeaafd67533b4471836974a515530a6"},{url:"assets/vendor.a231a000.js",revision:"4a26749ac8e2c30543124ca771a3981d"},{url:"assets/WalletOptions.04b0da78.js",revision:"208480b0579a0a093a207f1a890ff99a"},{url:"assets/WalletOptions.682b1252.css",revision:"0da43bdc858b3a405e601f0432ec45a2"},{url:"assets/Welcome.98fa9f5a.js",revision:"73b42bfc4ebbb9183da5413840ff2791"},{url:"assets/Welcome.b0da1a4e.css",revision:"5c444f092429ccd47b56c40d41c863cd"},{url:"index.html",revision:"2c1eb756a8b27592c299b2234eca7330"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
