'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9ad51e8b1408ae5c2116a4f6d9bf060a",
".git/config": "e0aae1b8d02aaccd133d226a11af8939",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2180e0069880eaae1054440ef5373971",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02abfa12733d696e628ec0b193371eb3",
".git/logs/refs/heads/main": "ee14e96f5715ad8030c4063321ebf00e",
".git/logs/refs/remotes/origin/main": "b9085694fa11b7367689fa9a33b2a0c3",
".git/objects/04/07b24fcd5786b13a0dd8804a5751c70f8dc04f": "754f93828299b8839bcbf5b24a275dae",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/ea26e9d857d9c898bb148c2839546b2549f6ef": "60c738aa2f26aa2e7745e68cd9c030c2",
".git/objects/24/6eeb0242d4501b944716ad6e457dda59db6fd3": "68fdfd4c97690d8bece17fc54191adab",
".git/objects/25/05cc5d6a0ce27f3adf269050ba87506400efbb": "28d8ed37bc2119276595cf354f8080a1",
".git/objects/2c/615d6eaa4c5a73258fd734da3b1f1f26378f06": "333c0a85fb0039296e7905631ca844bc",
".git/objects/3a/88c3276b8d403c178822bd3ea0fc019477f196": "1ea19cf0a9b8d81bc5dcb914d074517c",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/abf6deffa9726bcf39319870b77b7b47d34419": "715bc95657baf8eee16c584abe159836",
".git/objects/3c/2816fd0f4467637cf33b8c73d3f4ed5abf7d39": "cbf642d5f2713ef19433cf018fe19a0d",
".git/objects/3c/a72a442038a8f59ef695c0effdbed040aa618d": "271db3a815c175014913f46c03755102",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/201308b876b9b9099ef59f8ce83891a0f72767": "2271d6f32f998aa7aa4bdb047a67c0c0",
".git/objects/4b/742b670944179253c3f5942f90e6d7815d809f": "90a22f197a11de68e9a413b7b448f33a",
".git/objects/4d/0ab2db6bf7be494d5ac889ef1f699d78ec6195": "3f1c21eaf69165ec29fb65f81bd6741a",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/57/b0b03aebb303cff61ec3cbd4a2cc4ac29abf34": "8e0866d36f6161ecf5bead40b3b0e02a",
".git/objects/67/a399506e64249bfc1cf469da2f7e5449073786": "56688a2e0987fe9ecd3ee5d54be2763e",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/1b1f05434f39ed817fc9ae9b728cd4f74b570a": "942c4a1edf678a53a3a8066044a634cc",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/76/4178bb97dc9daca06071834893fab69236bb1a": "247b6985badfbd3e53fc6c83a9f07010",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/83/c8aeec027caa3fc69c3078a9b085a6d653545e": "213712301cd0019a42de394d0682287d",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/2c9c749a26a055b16ad1820a6efb13801ef145": "8ecd5227c15947afd69a4c64bd1cc422",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9d/90a57a896092d6f822ba12cb993d625ca6c10c": "ea35a440b3379a38f8558ea59fe96cf8",
".git/objects/9e/2ff2dd01034e772642a9bbe76e300323b699c7": "df8911d2616d43873170e9fc3420796f",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/57eceef7e2e8e77b1c53ba8e3bbd1d57aa64b2": "af1609bf369373aa303b81234623e65f",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/8d4f218c4df7116ed6948d627257507e32b56f": "817cc3b8a1868ca660b7258009778bb7",
".git/objects/c3/ef220d64c7b5075b7ac65ec34e6784957978d7": "e1de5d89faa3484ff1ed493eadf57b45",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/fc183ecd36b455b2b7a775357e7da0c27331f2": "ddf284c5af0f711fbc5d5c8f62805a68",
".git/objects/d1/ab517972f2c2af9e8d23e4e328b660d688f287": "c00b503bc97e2e59eddfb64f4f6c21b1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/38355c387c37fd43bc8a79b3989bc63a16d393": "9584869e9d8ab66e16ac936a3a4d09d0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/456c64c08cea88a63b16e060683fb1b03d0083": "78625e85a12d23fe0978474fab2ca681",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/43fa8bcebe193f502692f641ad06667385402e": "fafd1789d07e722772749b2b82bc0df9",
".git/objects/df/f120c730bf0c811e22768be9dd11c33d74fa8f": "fe4026aaa84bb92f97115355fad850aa",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/8582a222f21e530f16939e4cc0484bbf30dba7": "88a1b81bf2294bcb2c6baaa543f56956",
".git/objects/ea/9bb706525a02df5f399c960852ecd274095d52": "eeab144148259b97931746b77355e6e7",
".git/objects/eb/131012e24ec50356dc8eee36a3b68c7aedea5a": "22cc724b26fb756189d65837e32ac686",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/809123b5002a0028eea0704d12d8eb51384f5f": "4ca8d8fa6f9383e42fe111a34d401554",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "e2d570bfbca8dcbe4f4547579f12189b",
".git/refs/remotes/origin/main": "e2d570bfbca8dcbe4f4547579f12189b",
"assets/AssetManifest.bin": "964230c5ffc6c1881c8c35f857db2198",
"assets/AssetManifest.bin.json": "cd4a0990444cdc3fafde30659e1c8279",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9d540ae2f5c648e8f6de9753765c68c9",
"assets/lib/assets/esim_trouble_flow.json": "43135bb23b72a3219916cc64be0cf8ee",
"assets/lib/assets/images/task.jpg": "c7767977aa4b2e16aed462f152d2c25a",
"assets/lib/assets/internet_troubleshooting.json": "8e61114bf960be89065e7b8396f6859c",
"assets/lib/assets/mailingqa.json": "05b029772e9f761aca28998c156ba1eb",
"assets/lib/assets/questions.json": "49efc76b87d856e4cdf73beef70707cb",
"assets/lib/assets/sim_esim_flow.json": "cafe9750ae4b24371e4b3c9884ef5486",
"assets/lib/assets/slow_computer_actionmap.json": "f20c824f0e500a870c13eba1a773f5a2",
"assets/lib/assets/tora.json": "3d6bb5ad75331e507877863495971147",
"assets/lib/assets/trouble_sim.json": "c38a7a75e555a51e8e54ce20d3552cf3",
"assets/NOTICES": "e1f3d293dfd6cc153a7356205c25f17a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "37bf9961f60863881b05bcae7f4eb9bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d6b2ed4ad26d5025709061a01bf4fc83",
"/": "d6b2ed4ad26d5025709061a01bf4fc83",
"main.dart.js": "0d89f3becda63634a87db151888f57b7",
"manifest.json": "1e992993d20c7091d54a3b95685b4c31",
"version.json": "750800ceeeea08b73652696205f3273b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
