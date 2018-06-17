const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  'styles/main.css',
  'js/main.js'
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }).catch((error) => {
      console.log('Catch me if you can! ' +   error);
    })
  );
});
