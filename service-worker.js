importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE_NAME = 'raka-portfolio-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);