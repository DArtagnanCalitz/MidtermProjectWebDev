document.addEventListener("DOMContentLoaded", function() {
    // Weather API Example (using a public API for demonstration)
    const weatherElement = document.getElementById('weather');
    
    // This would be an actual weather API request
    fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Yosemite')
        .then(response => response.json())
        .then(data => {
            const temperature = data.current.temp_f;
            const condition = data.current.condition.text;
            weatherElement.innerHTML = `<p>Current temperature at Yosemite: ${temperature}°F, ${condition}</p>`;
        })
        .catch(err => {
            weatherElement.innerHTML = "<p>Unable to fetch weather data.</p>";
        });
});
function initMap() {
    // Google Maps API initialization
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 36.7783, lng: -119.4179 }, // California center
    });

    // Example marker for Yosemite
    new google.maps.Marker({
        position: { lat: 37.8651, lng: -119.5383 },
        map: map,
        title: "Yosemite National Park",
    });
}

// Asynchronous Google Maps API loading
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
document.head.appendChild(script);
