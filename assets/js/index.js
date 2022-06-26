document.addEventListener("DOMContentLoaded",()=>{
    fetchTrips();
    
})

function displayTrips(trip){
    const container=document.getElementById("trips-list")
    const list=document.createElement("li")
    

//fetch from json
function fetchTrips(){
    fetch("http://localhost:3000/trips")
    .then(resp=>resp.json())
    .then(tripsData=>tripsData.forEach(data=>displayTrips(data)))
    
}