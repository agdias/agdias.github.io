
const btn = document.querySelector('#btn-enable-push');
const applicationServerPublicKey = 'BEl5yaSl_5l0M7J3TFKX8r5MO7zKncm0tPU5XhOV5jBED2wj9h-I7V7qfYhIu0jrVfaH0hwC-wW6QcBCCXQvhSU';

const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const subscribeUser = (reg) => {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  }).then ((subscription) => {
    console.log('User is subscribed');
    //updateSubscriptionOnServer(subscription)
    isSubscribed = true;
    updateBtn(btn)
  }).catch((error) => {
    console.log('Failed to subscribe the user: ', error);
    updateBtn(btn);
  });
};
const initializeUI = (reg) => {
  btn.addEventListener('click', () => {
    btn.disabled = true;
    if (isSubscribed) {
      // TODO: unsubscribe user
    } else {
      subscribeUser(reg);
    }
  });
  reg.pushManager.getSubscription()
    .then ((subscription) => {
       isSubscribed = !(subscription === null);
       //updateSubscriptionOnServer(subscription);

      if (isSubscribed) {
        console.log('User IS subscribed');
      } else {
        console.log('User is NOT subscribed');
      }
      updateBtn(btn);
    });
};

const updateBtn = (btn) => {
  if(isSubscribed) {
    btn.textContent = 'DISABLE PUSH MESSAGING';
  } else {
    btn.textContent = 'ENABLE PUSH MESSAGING';
  }
  btn.disabled = false;
}
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push are supported');
  window.addEventListener('load',() => {
    console.log('loaded..')
    navigator.serviceWorker.register('sw.js', {scope:'/'})
    .then((reg)=> {
      initializeUI(reg);


      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      console.log('Registration failed with ' + error);
    });
  });
}
