document.addEventListener("DOMContentLoaded",()=>{
    fetchTrips();
    
})

function displayTrips(trip){
    const container=document.getElementById("trips-list")
    const list=document.createElement("li")
    

    list.innerHTML=`
    <img src="${trip.image}" alt="">
    <h2>${trip.title}</h2>
    <h3>${trip.venue}</h3>
    <h4>${trip.date}</h4>
    <p>${trip.description}</p>
    
    `
    container.appendChild(list)   

}

//fetch from json
function fetchTrips(){
    fetch("http://localhost:3000/trips")
    .then(resp=>resp.json())
    .then(tripsData=>tripsData.forEach(data=>displayTrips(data)))
    
}