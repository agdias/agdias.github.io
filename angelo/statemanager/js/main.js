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
}
