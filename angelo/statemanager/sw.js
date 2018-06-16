/*const cluster_health='http://localhost:9200/_cluster/health';*/

const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/angelo/statemanager/styles/main.css'
  '/angelo/statemanager/scripts/main.js'
];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      });
  )
})
