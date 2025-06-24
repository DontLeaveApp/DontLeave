function setupMap() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);;
        });
    } else {
        alert("ERROR: GEOLOCATION ERROR\nThere was an error with geolocation data. Please make sure to give geolocation consent, and try resetting the page (not reloading) if the issue is recurring. If you believe this is a bug, please use the GitHub to report it. The link is at the bottom of the page.")
    }
}