function Click() {
    navigator.serviceWorker.register('sw.js');
    Notification.requestPermission(function(result) {
    if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Notification with ServiceWorker');
        });
    }
    });
    // Notification.requestPermission().then(perm => {
    //     if (perm === "granted") {
    //         new Notification("Example Notification");
    //     }
    // });
}