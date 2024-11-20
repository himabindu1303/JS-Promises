//1) created promise chaining scenario where you need to enter bookmyshow app, after select date and after select theatre, after select movie and 
//after that select seat and need to go to phone pay and after that paying money

let app = true
const bookmyshow= new Promise((x,y)=>{
    if(app){
       setTimeout(() => {
        x("entered book my show app")
       }, 1000);
    }
    else{
        y("not enterd to the app")
    }
})

let date = true
const datebooking= new Promise((x,y)=>{
    if(date){
       setTimeout(() => {
        x("date is booked")
       }, 3000);
    }
    else{
        y("date is not yet book")
    }
})

let theatre = true
const theatrebooking= new Promise((x,y)=>{
    if(theatre){
       setTimeout(() => {
        x("theatre is final,set to go")
       }, 5000);
    }
    else{
        y("theatre is not yet confirmed")
    }
})

let movie = true
const moviebooking= new Promise((x,y)=>{
    if(movie){
       setTimeout(() => {
        x("movie is selected to watch")
       }, 7000);
    }
    else{
        y("movie is not yet selected")
    }
})

let seat = true
const seatbooking= new Promise((x,y)=>{
    if(seat){
       setTimeout(() => {
        x("seat is confirmed")
       }, 9000);
    }
    else{
        y("seat is not yet confirmed")
    }
})

bookmyshow.then(res=>{
    console.log(res);
    datebooking.then(res=>{
        console.log(res);
        theatrebooking.then(res=>{
            console.log(res);
            moviebooking.then(res=>{
                console.log(res);
                seatbooking.then(res=>{
                    console.log(res);
                    console.log("payment is done, all set to go for the movie");                   
                })                
            })            
        })        
    })    
}).catch(err=>console.log(err))

//2) promise chaining in uber booking, rider coming, reached to pick up point, pick you, 15 mins journey, drop

let ride = true
const ridebooking= new Promise((x,y)=>{
    if(ride){
       setTimeout(() => {
        x("ride is confirm, rider is coming")
       }, 11000);
    }
    else{
        y("ride is not yet confirmed")
    }
})

let reach = true
const reachedpoint= new Promise((x,y)=>{
    if(reach){
       setTimeout(() => {
        x("rider is reached to pick up point")
       }, 13000);
    }
    else{
        y("rider is not yet reached")
    }
})

let pick = true
const pickyou= new Promise((x,y)=>{
    if(pick){
       setTimeout(() => {
        x("pick you")
       }, 15000);
    }
    else{
        y("not yet reached and not pickup")
    }
})

let journey = true
const journeytodestination= new Promise((x,y)=>{
    if(journey){
       setTimeout(() => {
        x("15 mins journey")
       }, 17000);
    }
    else{
        y("not yet started journey")
    }
})

let drop = true
const reachedtodestination= new Promise((x,y)=>{
    if(drop){
       setTimeout(() => {
        x("you safely reached to destination")
       }, 19000);
    }
    else{
        y("not yet reached to destination!!")
    }
})

ridebooking.then(res=>{
    console.log(res);
    reachedpoint.then(res=>{
        console.log(res);
        pickyou.then(res=>{
            console.log(res);
            journeytodestination.then(res=>{
                console.log(res);
                reachedtodestination.then(res=>{
                    console.log(res);                    
                })                
            })            
        })
    })    
})
