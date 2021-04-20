const SearchForm = document.querySelector("form");
const searchReasultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";


SearchForm.addEventListener("submit" ,(e)=>{
    e.preventDefault();
   searchQuery= e.target.querySelector("input").value;
   
   fetchAI();
})
  const APP_ID="fa3b4d78";

 const APP_key= "a8992f8ade1b3808e08d614a76bfdb5e";	

 async function fetchAI(){
    const beasURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
    const response = await fetch(beasURL);
    const data = await response.json();
    generatHTML(data.hits);
   
 }
 function generatHTML(results){
     let generatedHTML ="";
     results.map(result=>{
         generatedHTML += `
      <div class="item">
         <img src="${result.recipe.image}" alt=""/>
         <div class="flex-container">
           <h1 class="title">${result.recipe.label}</h1>
           <a href="${result.recipe.url}" target="_blank" >View Recipe</a>
         </div>
         <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
     </div>
          `
     })
     searchReasultDiv.innerHTML = generatedHTML;

 }