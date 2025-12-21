'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a78d93ca2ae044f3e047696031007d95",
"version.json": "14b4ff7b6474fac170d40dc464629f54",
"index.html": "9ff4f6f21d7331c800dc52b4c6273bbd",
"/": "9ff4f6f21d7331c800dc52b4c6273bbd",
"main.dart.js": "d0a069958cadc5936a22c61f06c3e2c5",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4f1ee30bb8afdcc3becf58d67a72ecfc",
"assets/NOTICES": "c6248032bbe4aaef3301fdc553d36389",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "4d92be401c1137458892625d406f3418",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "c58394d619b018433476da68a9389f75",
"assets/fonts/MaterialIcons-Regular.otf": "fa9ca1a922f04f643601287cf3d75609",
"assets/assets/photos/photo_45.jpg": "de1d7eeb6806052cce3385b24912f07e",
"assets/assets/photos/photo_51.jpg": "49ae418e5c003905d0bf766d4cb97695",
"assets/assets/photos/photo_50.jpg": "731a838a16f9faca11ac2bd07a8adb66",
"assets/assets/photos/photo_44.jpg": "cb36f082524c9b2a01fab1b106641a66",
"assets/assets/photos/photo_52.jpg": "463ef82caa29fa4ba87d7d7f4add8f86",
"assets/assets/photos/photo_46.jpg": "46548bceed47cb937b2173dcf918bc19",
"assets/assets/photos/photo_47.jpg": "f4fb40c7ec2df14acdd45e75336416c8",
"assets/assets/photos/photo_53.jpg": "d167dd55e0160ceb36d7ea6272e7a48a",
"assets/assets/photos/photo_57.jpg": "db5e0343774f23af1d517cd04d9233e8",
"assets/assets/photos/photo_43.jpg": "4e398fd8ff4a8d93e3f23f0c36002330",
"assets/assets/photos/photo_42.jpg": "608cbcdafa0601ee53be549f83f0417d",
"assets/assets/photos/photo_56.jpg": "2512d19be3d8f663f4b2051957002d16",
"assets/assets/photos/photo_68.jpg": "1338ece83de9bfada21d85502033bdcd",
"assets/assets/photos/photo_40.jpg": "aadbca925cb2fe8db2f998bce2c18c99",
"assets/assets/photos/photo_54.jpg": "fd2060e77b0a3ff7ed181edf8ce566fa",
"assets/assets/photos/photo_55.jpg": "fb2eb647d582532365bf2afcb182959e",
"assets/assets/photos/photo_41.jpg": "dd3cdc2d19bed5df5da1b64bc7fbdce4",
"assets/assets/photos/photo_26.jpg": "a1db63aafe859bd00e46fce64e493ebc",
"assets/assets/photos/photo_32.jpg": "671cd5a7fc2265fa6828f33ef300e4d0",
"assets/assets/photos/photo_33.jpg": "1e32d0929be97a60d94471b306e65eb4",
"assets/assets/photos/photo_27.jpg": "2d38675279613f15e9bba2a45bf835d6",
"assets/assets/photos/photo_31.jpg": "34dfd4cbc9222495562210c54526761e",
"assets/assets/photos/photo_25.jpg": "003ef725f0ddb590d36bbfcec6d185ca",
"assets/assets/photos/photo_19.jpg": "13a4aac9e8581f03c6af5daf5d973729",
"assets/assets/photos/photo_18.jpg": "5c4c1fa2352fad21fe28df577f573004",
"assets/assets/photos/photo_24.jpg": "d433c1f29139c61f4c30f2b023851b81",
"assets/assets/photos/photo_30.jpg": "670ed2c872952ce673015ee1aa605407",
"assets/assets/photos/photo_08.jpg": "574d888f9bde757f2d2cf07657564ce4",
"assets/assets/photos/photo_34.jpg": "376b5a5902acaa55d1be1ac2112ddf00",
"assets/assets/photos/photo_20.jpg": "935eb88420b16564570edd40def060ca",
"assets/assets/photos/photo_21.jpg": "2463f86d89cc7e1e7e62ce78f3660005",
"assets/assets/photos/photo_35.jpg": "6d66c5317647a87619e4fb73bbccd6b7",
"assets/assets/photos/photo_09.jpg": "daecb15ca51446d647f9183c58f762dd",
"assets/assets/photos/photo_23.jpg": "288e8b6fac7e6669dd0a46b5105946ac",
"assets/assets/photos/photo_37.jpg": "8d6f46f8450dfe6d61f743e476dcff76",
"assets/assets/photos/photo_36.jpg": "ee807cdb0a47f403bcef9392c139e5ee",
"assets/assets/photos/photo_22.jpg": "09cef941886c9b535c171b7f16755006",
"assets/assets/photos/photo_07.jpg": "fe3b810e5d394532cb00f23a765f8b10",
"assets/assets/photos/photo_13.jpg": "030fe4cf73c5ca42f834f791fc3c2001",
"assets/assets/photos/photo_12.jpg": "e8c1e367649a1bdd728559aad05f8ef6",
"assets/assets/photos/photo_06.jpg": "0f24555602bf455a0f9a2e3b018f4e57",
"assets/assets/photos/photo_10.jpg": "d2534be51b8007c22dc3d36881258ba6",
"assets/assets/photos/photo_04.jpg": "2ec14e0d89cfef80d2d33d05952a4589",
"assets/assets/photos/photo_38.jpg": "b05d860ba4ed3cbd1bb0011a3b0e56d2",
"assets/assets/photos/photo_39.jpg": "34ea8f354a0bd58c230be2a18bbf74a6",
"assets/assets/photos/photo_05.jpg": "db630db322c720a9326194a991444507",
"assets/assets/photos/photo_11.jpg": "237f74595280acef8cef9eb291632000",
"assets/assets/photos/photo_29.jpg": "13be2461169344f4796aea9e5a242b5b",
"assets/assets/photos/photo_15.jpg": "6914b9f22c7f355946ef5798b2488e38",
"assets/assets/photos/photo_01.jpg": "ee29668c2f41441365b72e2055629dab",
"assets/assets/photos/photo_14.jpg": "c5fd9e4580767445a927797664913b89",
"assets/assets/photos/photo_28.jpg": "9a52f3a7d6160eb750b32d94d761894e",
"assets/assets/photos/photo_02.jpg": "7add900c7c06633f7cdc70c47e090a99",
"assets/assets/photos/photo_16.jpg": "fe540dd6792a601e94484c067a98ad16",
"assets/assets/photos/photo_17.jpg": "47f477b7c01600cafe4a9783e0a9cf17",
"assets/assets/photos/photo_03.jpg": "16ba020aadadb353374f59a6314eba94",
"assets/assets/photos/photo_64.jpg": "e728a35e9a5e5fc73ba672566fb7b44d",
"assets/assets/photos/photo_58.jpg": "c46162d1c99027b4084acf2d629d6f0f",
"assets/assets/photos/photo_59.jpg": "0d10cc34c5a226292e524abbde739ba0",
"assets/assets/photos/photo_65.jpg": "6e770b44c2f16d286ed015ee451e260b",
"assets/assets/photos/photo_67.jpg": "e927b661fa249c2c4e62cb6d4b19a9bf",
"assets/assets/photos/photo_66.jpg": "be04bd89c82f34d6f47e5fedd37f556f",
"assets/assets/photos/photo_62.jpg": "981b5142e17e01594626252eb5f18d01",
"assets/assets/photos/photo_63.jpg": "64aae67f6254fa718f68fa10c316b113",
"assets/assets/photos/photo_49.jpg": "1082411e1a6f8a3b0ba775ff3ead1708",
"assets/assets/photos/photo_61.jpg": "20e039e54295fb0e1a3df328302b2804",
"assets/assets/photos/photo_60.jpg": "38edc88bf14fb1a10731175283a97cc2",
"assets/assets/photos/photo_48.jpg": "162823fb2aeab351f33b79de652642c1",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
