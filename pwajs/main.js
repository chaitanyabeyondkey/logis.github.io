// sw are supported 
if('serviceWorker' in navigator){
    // console.log('service worker are supported');
    // we want to register when window (object) load 
    window.addEventListener('load', ()=>{
        navigator.serviceWorker
            .register('../sw_cached.js')
            .then(reg => console.log('service worker: Registered'))
            .catch(err => console.log(`Service Worker : Error : ${err}`));


            window.addEventListener('beforeinstallprompt', event => {
                event.preventDefault();
                var button = document.querySelector('button');
                button.removeAttribute('hidden');
                button.addEventListener('click', () => {
                  event.prompt();
                  button.setAttribute('disabled', true);
                });
              });

              
    });
}