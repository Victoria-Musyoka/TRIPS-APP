document.addEventListener("DOMContentLoaded",()=>{
    fetchTrips();
    
})


//fetch from json
function fetchTrips(){
    fetch("http://localhost:3000/trips")
    .then(resp=>resp.json())
    .then(tripsData=>tripsData.forEach(data=>displayTrips(data)))
    
}