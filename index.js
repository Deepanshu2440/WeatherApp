const temperatureField = document.querySelector(".weather1");
const cityFeild = document.querySelector(".weather2 p");
const dateFeild = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchfield");
const form = document.querySelector("form");

let target ="mumbai";

const fetchData = async (target) => {

    try{
        const url = `https://api.weatherapi.com/v1/current.json?key=6074844d3deb4f1da44102046230909&q=${target}`;

        const response = await fetch(url);
        const data = await response.json();
    
        
        updateDom(data.current.temp_c,data.location.name ,data.location.localtime, data.current.condition.icon , data.current.condition.text);
    
        console.log(data.current.temp_c , data.location.name , data.current.condition.icon , data.current.condition.text);
    }catch(error){
        alert("not found");
    }

 
};

fetchData(target);

function updateDom(temperature,city,time, emoji,text){

    temperatureField.innerText = `${temperature}°`;
    cityFeild.innerText=city;
    dateFeild.innerText=time;


    emojiField.src =emoji;
    weatherField.innerText =text;
    
}



form.addEventListener("submit", (e)=>{

    e.preventDefault();

    target = searchField.value;

    fetchData(target);


})



