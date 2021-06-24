var res = document.getElementById('result')

function geoLocation() {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(showPosition)
    }
    else {
        res.innerHTML = "This Is Not Supported"
    }

}

function showPosition(position) {
    res.innerHTML = `latitude ${position.coords.latitude}<br>longitude ${position.coords.longitude}`
}