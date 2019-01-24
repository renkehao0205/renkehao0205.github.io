/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "82dac7920b3e49e8e30b5d4fe1581c7c"
  },
  {
    "url": "assets/css/1.styles.27d21806.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.54abfbd5.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.d645e12b.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.bd344d2d.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.86721dcf.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.e21b0013.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/7.styles.65b127a3.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.a2f4ec1a.css",
    "revision": "fecdab6fbc2c34817d0b01b77565c040"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.27d21806.js",
    "revision": "b7970ca52a3e1a3c047516103fcacabb"
  },
  {
    "url": "assets/js/10.654b4d7f.js",
    "revision": "82881b724b39026fbfe5a347c04609d4"
  },
  {
    "url": "assets/js/11.ab175195.js",
    "revision": "7cfae245f25d72294e44cdb68dbb8371"
  },
  {
    "url": "assets/js/12.07a15390.js",
    "revision": "152cb93e5b53b57be20e535b3e7b6c93"
  },
  {
    "url": "assets/js/13.bf258799.js",
    "revision": "89b7f64eaa3a21b752260aded590a1e5"
  },
  {
    "url": "assets/js/14.1f51314d.js",
    "revision": "59bd6153b4ce3f7985cac98d99821cc5"
  },
  {
    "url": "assets/js/15.c280a019.js",
    "revision": "4a66aec82d691026573edad4f782522c"
  },
  {
    "url": "assets/js/16.5a554acf.js",
    "revision": "ab230e498675e00b7b371563d8df7d1a"
  },
  {
    "url": "assets/js/17.562ae3a4.js",
    "revision": "fcc5f484584a107975b2a619480f84a4"
  },
  {
    "url": "assets/js/18.21446a84.js",
    "revision": "41cc6b95fa871e7f1dbbdcf638c54123"
  },
  {
    "url": "assets/js/19.601f3bda.js",
    "revision": "971ef2e3ffffeeea862f7e5c5029e200"
  },
  {
    "url": "assets/js/2.54abfbd5.js",
    "revision": "01eb8d19f3d89dd9f8af43ba63349b1c"
  },
  {
    "url": "assets/js/20.56cbab5b.js",
    "revision": "83fe8f4aa633e162b9e4a32630cb5ed9"
  },
  {
    "url": "assets/js/21.24c86fd5.js",
    "revision": "c24f8697787c6cba5972201ee74e262e"
  },
  {
    "url": "assets/js/22.bfc70da3.js",
    "revision": "b98640618ecefb47918d662c9cae2fad"
  },
  {
    "url": "assets/js/23.cf90c12c.js",
    "revision": "4479fe0b592aec79ba0922f8c22e65e6"
  },
  {
    "url": "assets/js/24.d9d1976a.js",
    "revision": "03a73d2dba5b4f33bf6bd90277ae3115"
  },
  {
    "url": "assets/js/25.f3da7aa9.js",
    "revision": "e7518b8fd7cdf00a550297640f3bdc61"
  },
  {
    "url": "assets/js/26.4b9e3c0e.js",
    "revision": "a82f2a3ff83b3400ea7dbd37f3b60baa"
  },
  {
    "url": "assets/js/27.a9e7442c.js",
    "revision": "8fe78fa0dd90e185d7bad5b254b5be68"
  },
  {
    "url": "assets/js/28.404a2f73.js",
    "revision": "cdd9d9e0e59d39b4a8a0cf30d3d10934"
  },
  {
    "url": "assets/js/29.5db914ff.js",
    "revision": "9f26bc86d0b3a2d55422e5634e1cb320"
  },
  {
    "url": "assets/js/3.d645e12b.js",
    "revision": "cadc8d7a51a5dcc3d1ba0db376d22884"
  },
  {
    "url": "assets/js/30.88573f9b.js",
    "revision": "55664c1e2bd692fc7d35ddb5307271fe"
  },
  {
    "url": "assets/js/31.8f80fe54.js",
    "revision": "158619402a2c298af2cf83d1185c93ab"
  },
  {
    "url": "assets/js/32.59c6a91c.js",
    "revision": "2bc9aedc43559d2967c80007e340900e"
  },
  {
    "url": "assets/js/33.cbd10c93.js",
    "revision": "46dbf1ef47c04d515980013880da5f03"
  },
  {
    "url": "assets/js/34.6dcacab0.js",
    "revision": "c1b86be63971b479512371164d5c7516"
  },
  {
    "url": "assets/js/35.b57e19d8.js",
    "revision": "2a948f8878c4b491c6c921c254b91cc7"
  },
  {
    "url": "assets/js/36.144343bd.js",
    "revision": "bbbdeecffd6f7b32ebd31f87a43720aa"
  },
  {
    "url": "assets/js/37.f15dc6ad.js",
    "revision": "61930d351d7b94299614d3484504f9f8"
  },
  {
    "url": "assets/js/38.ef611aca.js",
    "revision": "7c48412a0998d440b0faa66d98b8c5b8"
  },
  {
    "url": "assets/js/39.7198f5e3.js",
    "revision": "914e1cb061f424c6d051326d020b4a52"
  },
  {
    "url": "assets/js/4.bd344d2d.js",
    "revision": "4f6950a3b33e933ad1979f4afc575431"
  },
  {
    "url": "assets/js/40.87a7a00d.js",
    "revision": "9e8cf96e8f4de70ccda11d242c69fd88"
  },
  {
    "url": "assets/js/41.ea9774e7.js",
    "revision": "d9046e060f3bbf69777ca1c9ff9429f4"
  },
  {
    "url": "assets/js/42.1a7db393.js",
    "revision": "d400e3b0d757e97ad67fd0a3149a1a43"
  },
  {
    "url": "assets/js/43.ff59f968.js",
    "revision": "4c7465b7c0e8852e49f26873f6822a4b"
  },
  {
    "url": "assets/js/44.abe55d27.js",
    "revision": "68b005daf17dca78e14c0d46f44a5aef"
  },
  {
    "url": "assets/js/45.ef40ad91.js",
    "revision": "d970e4690dbc49f70da0ae979d9a0987"
  },
  {
    "url": "assets/js/46.713dee08.js",
    "revision": "46c8d689d38d5ee2458e6718d0851615"
  },
  {
    "url": "assets/js/47.314edbbe.js",
    "revision": "588181e2ea456a2dac4c83722e9151d7"
  },
  {
    "url": "assets/js/48.a37a0c66.js",
    "revision": "f1aae229521bab921178365d0632c23a"
  },
  {
    "url": "assets/js/49.2bd2444e.js",
    "revision": "7ccdcff9ad765d8fd9690f0e48ebd1e9"
  },
  {
    "url": "assets/js/5.86721dcf.js",
    "revision": "fc56224a730ed69777ab86fd87162811"
  },
  {
    "url": "assets/js/50.3d018e88.js",
    "revision": "d95bb3b840d06b665c98f17eb5d070a4"
  },
  {
    "url": "assets/js/51.d6f00b82.js",
    "revision": "243b5877b570baf5ab411473230e4671"
  },
  {
    "url": "assets/js/52.3064ed68.js",
    "revision": "94421773c932ba0bd10e65dfb8e1c53a"
  },
  {
    "url": "assets/js/53.51501dc9.js",
    "revision": "6ead3672daf41698806a72804447b5a6"
  },
  {
    "url": "assets/js/54.9d4b7761.js",
    "revision": "22d1679f1b9fad2593f305ee17006603"
  },
  {
    "url": "assets/js/55.f8fa86e2.js",
    "revision": "1f8be35a49321222f9ae30ad0da3c8bf"
  },
  {
    "url": "assets/js/56.e7841ac8.js",
    "revision": "0eece098c06f811d4a0f76eaf78a8dfa"
  },
  {
    "url": "assets/js/57.139fee6a.js",
    "revision": "ff7c35a987284600cf87f45049a854f7"
  },
  {
    "url": "assets/js/58.6c8fe65a.js",
    "revision": "bae031f9e640def66650a8ffb2702d5f"
  },
  {
    "url": "assets/js/59.45cf1e1d.js",
    "revision": "5fc02c628d80f9aa6123d004fa005a7f"
  },
  {
    "url": "assets/js/6.e21b0013.js",
    "revision": "2977d276a5cb061e59d8caa9dae7d83b"
  },
  {
    "url": "assets/js/60.8d3a6d20.js",
    "revision": "ca9fd0d357c4d0269bb1ba956b90d6ff"
  },
  {
    "url": "assets/js/61.8f710d55.js",
    "revision": "94bf641c4c1ece6617c755186738625b"
  },
  {
    "url": "assets/js/62.cb615e16.js",
    "revision": "2691670d694307285ebfbc4ed87fd394"
  },
  {
    "url": "assets/js/63.2a494333.js",
    "revision": "c79b75422c25047ac0dc35a421d45196"
  },
  {
    "url": "assets/js/64.78af4330.js",
    "revision": "01208ecbbbd8a64b52dcfff8d0ade2b2"
  },
  {
    "url": "assets/js/65.6b056af6.js",
    "revision": "2de4fbe683689fb98d57cfb4e3464f00"
  },
  {
    "url": "assets/js/66.d89d8c9f.js",
    "revision": "76527ab13108f2c2c866eb4a42c896ff"
  },
  {
    "url": "assets/js/67.0598ad50.js",
    "revision": "7f0376dfee217d932c9ebcbf760eead3"
  },
  {
    "url": "assets/js/68.db398bd7.js",
    "revision": "0c5ffeff78f3602301d17ba6a4ec33cb"
  },
  {
    "url": "assets/js/7.65b127a3.js",
    "revision": "a065a1cd372fd5240a8700c4498df6c1"
  },
  {
    "url": "assets/js/8.ac139e3e.js",
    "revision": "d23237490c028bab0220dec2e3efd280"
  },
  {
    "url": "assets/js/9.de2de4bc.js",
    "revision": "72424efd4aaca8d7b3b4fdb2b433d010"
  },
  {
    "url": "assets/js/app.a2f4ec1a.js",
    "revision": "faac1919550fb381f30f55e1f4b8bb16"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "config/index.html",
    "revision": "d1a6d8ad9f154c9b05ed34e5a5338336"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "4f4343a88952c7497e6eb49a55977fd9"
  },
  {
    "url": "guide/assets.html",
    "revision": "dbe24d64ce662bf9d1624b3a1d8e4129"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e70998e18b2c4630690df9f1f6a18e32"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "6cf4cb5abec1e7491b53f170217ad759"
  },
  {
    "url": "guide/deploy.html",
    "revision": "177710a299eef1da4e4a11ec617e61ff"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "562101dc306bda13b255a389cf8e107d"
  },
  {
    "url": "guide/i18n.html",
    "revision": "b048a9b6bab6324d685ff118677dbfd9"
  },
  {
    "url": "guide/index.html",
    "revision": "161ac42e54093faf212d8c2d3cd02a12"
  },
  {
    "url": "guide/markdown.html",
    "revision": "1128e7a6f0ca793a251119fefe078469"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "a2df52ab993e82e005bf86b138a246ad"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "3c1f8335a21b432e1e61341231d94262"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "31cf9e1016760b451f2e9a1dcb29dd38"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "77818f81303e6f92a7c68e6e6295826a"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "db7f611d896b3a60ce2c4279de78ca54"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "2ea0af948eedbce5be3a3aa01202fa2c"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "3406813a5afc91ba7c641363c64bc4e3"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "7b646b21f6efb076487d6743bc48ce3b"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "57d40fe52c329217b5b54e6b408bd194"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "41036cdfef80d62a0fcf9f9ff84b40e0"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "75639f2a475aa759d7c8ded25f121b8a"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "9294fb396989f0c82b0dc6ba27e9accc"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "d73fc26d7ee90878dea9b402fc339786"
  },
  {
    "url": "zh/index.html",
    "revision": "160fa612b2aa1db5fc728313cf06736c"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "27c46f60866e993dfe7cebc78daf8a74"
  },
  {
    "url": "zh/interview/headline.html",
    "revision": "f5ee7b0252e1a9a61a0519fc939ca74f"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "0219a132bda1cfe5c8d9014b482ea153"
  },
  {
    "url": "zh/interview/quick.html",
    "revision": "30643225a22ee81698bbea46aa5c37e7"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "2310e1218e636f179d6037fabc9d147c"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "becd0ff77a1e06d91a874cab1c73b81a"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "3693d4aabd687c9f4ed42f3bcb10489a"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "87d03ec5fbba7b68f17de4207a312593"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "d26165b3fcd04431038e2fc37112d3ff"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "b4377a98b8726a83e02ad922be9a5e68"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "526824af9293490181699570359f86c9"
  },
  {
    "url": "zh/react/index.html",
    "revision": "c1354da299c00e1407f99b1bcd76bb75"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "8f4341f394f0673aaa0407543016b582"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "4cf81d7a76f1df9755581f671ac90be8"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "11df3be8ea9fde506c0607875e5db5ae"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "d2be872f20f5ff507b1753bb3ada7a58"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "6710862d9398ca4f91c1d16a33d9d5ce"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "513b56bc679c8e8622a12262cc0ad331"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "d57eb25a3706be015fd173560b6ddb3e"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "906a3f34a3742291f59b765752f96fe8"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "e13ae35c0e641481b6a0e6596c0e2345"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "d98f6a2eeaac47b6094e56bc2936265e"
  },
  {
    "url": "zh/renkehao/index.html",
    "revision": "e39878d5f8a004bf6d6c9f0c1c143462"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "0b87b75b4a03982aee7026529143347c"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "de7b8bedf2595b22286a3b8b41cefce7"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "3342bad28ad47995954a0eb770255884"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "1bf8870c6ba27461839028f242714819"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "daf8036fe43188a710281a4f2811b305"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "114066445eac959612a4d8b4f2e51a99"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "bab199c7b4b8802cffdfffd61bbba6f7"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "8bf97b29c2f5334c2f80801ddff50c8e"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "6c61d8319cbfa321ead8543a4c4026e5"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "6e2b3e1ea615584f7e95a7b7c5ff8e3a"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "5704f6296bec2f7220edc35dc3125b59"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "065b0984935bc758416847305c73c51d"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "561c2b2d89899fed4e8ca5e8c1a42537"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "01c3de3949ea519c0012c61b4bbf1a73"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "caef2c8eb5d5460d2bed083618bb3027"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
