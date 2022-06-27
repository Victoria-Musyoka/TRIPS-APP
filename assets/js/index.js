document.addEventListener("DOMContentLoaded",()=>{
    fetchTrips();
    fetchReviews();
    
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
console.log(document.getElementsByClassName('.btn'))

const data={}
const form = document.querySelector(".form").addEventListener("submit",(e)=>{
    e.preventDefault()
   const inputElement = document.querySelector("#description").value

//    console.log(e.target.inputElement)
data.description=inputElement


   fetch("http://localhost:3000/review",{
   method: "POST",
   headers:{
    "content-Type":"application/json",
    accept:"application/json"
   },
   body:JSON.stringify(data)
   })
   .then(resp=>resp.json())
   .then(tripsData=>console.log(tripsData))

   
}

)
function displayReviews(review){
    const listReview= document.querySelector("#list")
    const li=document.createElement("li")
    li.innerHTML=`
    <h2>${review.description}</h2>
 
    `
    listReview.appendChild(li)
    
    // console.log(li)
 }



function fetchReviews(){
    fetch("http://localhost:3000/review")
    .then(resp=>resp.json())
    .then(reviewData=>reviewData.forEach(review=>displayReviews(review)))
}

