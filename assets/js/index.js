let addTrip = false;

document.addEventListener("DOMContentLoaded",()=>{
    fetchTrips();
    fetchReviews();
    
    const addBtn=document.querySelector("#new-trip-btn");
    const container=document.getElementById("trips-list");
    const list=document.createElement("li");
    addBtn.addEventListener("click",()=>{
    //hie and seek
    addTrip=!addTrip;
    if(addTrip){
        tripFormContainer.style.display = "block";
    }else {
        tripFormContainer.style.display="none";
    }
    });
    getTripData()

    document.querySelector(".add-trip-form").addEventListener("submit",handleSubmit)
    
});

//handle events
function handleSubmit(e){
    e.preventDefault()
    let newTrip={
        "trip":e.target.name.value,
        "imageUrl":e.target.image,
        "likes":0
    }
    renderTrip(newTrip)
    addTripData(newTrip)
}

//render each trip
function renderTrip(trip){
    let list = document.createElement('div');
    list.className = 'list';
    list.innerHTML=`
    <img src="${trip.image}" alt="">
    <h2>${trip.title}</h2>
    <h3>${trip.venue}</h3>
    <h4>${trip.date}</h4>
    <p>${trip.description}</p>
    <p id="likesP">${trip.likes}likes</p>
    <button id="likeBtn">like</button>
    
    `
    // container.appendChild(list)   
    list.querySelector("#likeBtn").addEventListener('click',(event)=>{
      event.preventDefault()
      trip.likes +=1;
      list.querySelector("#likesP").textContent=trip.likes +""+"likes"
      updateLikes(trip)
    })

  document.querySelector('#trips-list').appendChild(list)
}

//fetch from json

// console.log(document.getElementsByClassName('.btn'))


function getTripData(){
    fetch("http://localhost:3000/trips")
    .then(res=>res.json())
    .then(tripData=>tripData.forEach(trip=>renderTrip(trip)))
}
//POST
function addTripData(newtrip){
    fetch("http://localhost:3000/trips", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newtrip)
    })
    .then(res => res.json())
    .then(trip=> console.log(trip))
  
  }
  
  // //patch
  function updateLikes(trip){
    
  
    fetch(`http://localhost:3000/trips/${trip.id}`, {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(trip)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }





  function fetchTrips(){
    fetch("http://localhost:3000/trips")
    .then(resp=>resp.json())
    .then(tripData=>tripData.forEach(trip=>displayTrips(trip)))
    
}



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

