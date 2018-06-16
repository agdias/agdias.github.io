const CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/angelo/statemanager/styles/main.css',
  '/angelo/statemanager/js/main.js'
];

if ('serviceWorker' in navigator) {
  window.addEventListener('load',() => {
    console.log('loaded..')
    navigator.serviceWorker.register('sw.js', {scope:'/angelo/statemanager/'})
    .then((reg)=> {
      console.log('register...');
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      console.log('Registration failed with ' + error)
    });

  });
  self.addEventListener('install',(event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        });
    )
  });


}
