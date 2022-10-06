// sw are supported 
if('serviceWorker' in navigator){
    // console.log('service worker are supported');
    // we want to register when window (object) load 
    window.addEventListener('load', ()=>{
        navigator.serviceWorker
            .register('https://chaitanyabeyondkey.github.io/logis.github.io/sw_cached.js')
            .then(reg => console.log('service worker: Registered'))
            .catch(err => console.log(`Service Worker : Error : ${err}`));

              
    });
}