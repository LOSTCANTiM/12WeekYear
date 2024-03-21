function Click() {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification("Example Notification");
        }
    });
}