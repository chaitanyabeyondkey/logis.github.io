// sw are supported 
if('serviceWorker' in navigator){
    // console.log('service worker are supported');
    // we want to register when window (object) load 
    window.addEventListener('load', ()=>{
        navigator.serviceWorker
            .register('sw_cached.js')
            .then(reg => console.log('service worker: Registered'))
            .catch(err => console.log(`Service Worker : Error : ${err}`));

              
    });
}


/** new code 8 dec 2022 trial addeed */


// Gather the data from your custom install UI event listener
installButton.addEventListener('click', async () => {
    // deferredPrompt is a global variable we've been using in the sample to capture the `beforeinstallevent`
    deferredPrompt.prompt();
    // Find out whether the user confirmed the installation or not
    const { outcome } = await deferredPrompt.userChoice;
    // The deferredPrompt can only be used once.
    deferredPrompt = null;
    // Act on the user's choice
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt.');
    } else if (outcome === 'dismissed') {
      console.log('User dismissed the install prompt');
    }
  });