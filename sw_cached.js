const cacheName = "v1";

const cacheAssets = [
  "index.html",
  "about.html",
  "contact.html",
  "get-a-quote.html",
  "pricing.html",
  "sample-inner-page.html",
  "service-details.html",
  "services.html",
  "changelog.txt",
  "Readme.txt",
  "/css/style.css",
  "/pwajs/main.js",
  "/forms/contact.php",
  "/forms/quote.php",
  "/forms/Readme.txt",
  "/assets/css/main.css",
  "/assets/js/main.js",
  "/assets/vendor/aos/aos.css",
  "/assets/vendor/aos/aos.js",
  "/assets/vendor/bootstrap/css/bootstrap.min.css",
  "/assets/vendor/bootstrap-icons/bootstrap-icons.css",
  "/assets/vendor/fontawesome-free/css/all.min.css",
  "/assets/vendor/glightbox/css/glightbox.min.css",
  "/assets/vendor/glightbox/css/glightbox.min.css",
  "/assets/vendor/swiper/swiper-bundle.min.css",
  "/assets/vendor/php-email-form/validate.js",
  "/assets/vendor/glightbox/js/glightbox.js",
  "/assets/img/about.jpg",
  "/assets/img/apple-touch-icon.png",
  "/assets/img/cargo-service.jpg",
  "/assets/img/cta-bg.jpg",
  "/assets/img/favicon.png",
  "/assets/img/features-1.jpg",
  "/assets/img/features-2.jpg",
  "/assets/img/features-3.jpg",
  "/assets/img/features-4.jpg",
  "/assets/img/hero-bg.png",
  "/assets/img/hero-img.svg",
  "/assets/img/logistics-service.jpg",
  "/assets/img/logo.png",
  "/assets/img/packaging-service.jpg",
  "/assets/img/page-header.jpg",
  "/assets/img/quote-bg.jpg",
  "/assets/img/service-details.jpg",
  "/assets/img/storage-service.jpg",
  "/assets/img/testimonials-bg.jpg",
  "/assets/img/trucking-service.jpg",
  "/assets/img/warehousing-service.jpg",
  "/assets/img/team/team-1.jpg",
  "/assets/img/team/team-2.jpg",
  "/assets/img/team/team-3.jpg",
  "/assets/img/testimonials/testimonials-1.jpg",
  "/assets/img/testimonials/testimonials-2.jpg",
  "/assets/img/testimonials/testimonials-3.jpg",
  "/assets/img/testimonials/testimonials-4.jpg",
  "/assets/img/testimonials/testimonials-5.jpg",
];

// call install event
self.addEventListener("install", (e) => {
  console.log("Service Worker : Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener("activate", (e) => {
  console.log("Service Worker : Activated");
  //   Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker : Clearing all cache");
            return caches.delete();
          }
        })
      );
    })
  );
});

// call Fetch Event

self.addEventListener("fetch", (e) => {
  console.log("Service Worker : Fetching ");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});





 

