function Click() {
    navigator.serviceWorker.register('sw.js');
    Notification.requestPermission(function(result) {
    if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('12 Week Year', {
            body: "This is a test message",
            timestamp: Math.floor(Date.now())+100,
        });
        });
    }
    });
    console.log(Math.floor(Date.now()));
    console.log(Math.floor(Date.now())+10);
    // Notification.requestPermission().then(perm => {
    //     if (perm === "granted") {
    //         new Notification("Example Notification");
    //     }
    // });
}

// setInterval(function() {
//     // check the time, if it is 10 min before end-time, display notification
//     navigator.serviceWorker.register('sw.js');
//     Notification.requestPermission(function(result) {
//     if (result === 'granted') {
//         navigator.serviceWorker.ready.then(function(registration) {
//         registration.showNotification('12 Week Year', {
//             body: "This is a test message",
//             timestamp: Math.floor(Date.now())+100,
//         });
//         });
//     }
//     });
//     console.log(Math.floor(Date.now()));
//     console.log(Math.floor(Date.now())+10);
//     // Notification.requestPermission().then(perm => {
//     //     if (perm === "granted") {
//     //         new Notification("Example Notification");
//     //     }
//     // });
//  }, 1000);