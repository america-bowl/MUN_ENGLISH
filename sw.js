
// アプリの画面やプログラムを更新した時は、この 'v(n)' を 'v(n+1)'に変更する
const CACHE_NAME = 'mun-english-v(1)';

// オフライン保存するファイルリスト
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js'
];

// 1. インストール処理
self.addEventListener('install', (event) => {
  // 新しいSWがきたら待機せずにすぐ有効化する
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. 有効化処理（古いキャッシュの削除）
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // 現在の CACHE_NAME 以外の古いキャッシュを削除
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  // 開いている全タブをすぐに新しいService Workerの制御下に置く
  self.clients.claim();
});

// 3. 通信（Fetch）処理
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // キャッシュにあればそれを返し、無ければネットワークから取得
      return cachedResponse || fetch(event.request);
    })
  );
});
