const CACHE = "nas100-monitor-v1";
const APP_FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_FILES))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin && event.request.method === "GET") {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});