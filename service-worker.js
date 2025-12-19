self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => new Response("Offline"))
  );
});

self.addEventListener("push", event => {
  const data = event.data ? event.data.text() : "Shift Alive";
  event.waitUntil(
    self.registration.showNotification("Shift Alive", {
      body: data,
      icon: "icon-192.png",
      vibrate: [100, 50, 100]
    })
  );
});
