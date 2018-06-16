if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {scope:'/angelo/statemanager/'})
  .then((reg)=> {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error)
  });

}
