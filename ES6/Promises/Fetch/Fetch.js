fetch('http://www.omdbapi.com/?t=loki&apikey=7abd6720')
    .then(response => response.json())
    .then(json => console.log(json))
