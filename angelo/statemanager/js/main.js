if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/manager/sw.js', {scope:'/manager/'})
  .then((reg)=> {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error)
  });

}
