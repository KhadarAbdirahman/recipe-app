

// creating foods

const foods = [
  {name :"rice", price :"$2" , image: "rice.jpg" },
   {name :"chicken", price :"$3" , image: "chicken.jpg" },
    {name :"shawarma", price :"$2" , image: "shawarma.jpg" },
     {name :"pasta", price :"$2.5" , image: "pasta.jpg" },
      {name :"pizza", price :"$6.9" , image: "pizza.jpg" },
       {name :"burger", price :"$5.9" , image: "burger.jpg" },
         {name :"french fries", price :"$4" , image: "french fries.jpg" },
           {name :"fish", price :"$3" , image: "fish.jpg" },
             {name :"pancake", price :"$5" , image: "pancake.jpg" },
               {name :"fruits", price :"$4" , image: "fruits.jpg" },
]


// Function items



function displayProducts(){

  const foodList =document.getElementById("foodList")

  foodList.innerHTML = ""

  foods.forEach(food =>{
    const foodElement =document.createElement("div")


foodElement.className = "food"

foodElement.innerHTML = `
<img src="${food.image}" alt= ${food.name}  
<p>${food.name}</p>
<p>${food.price}</p>

`
foodList.appendChild(foodElement)

  })
}


// search foods

document.getElementById("searchFood").addEventListener("input", function(event){
  const searchQuery = event.target.value.toLowerCase();


const filteredfoods = foods.filter(food=>food.name.toLowerCase().includes(searchQuery))

const foodList = document.getElementById("foodList")


foodList.innerHTML = ""

filteredfoods.forEach(food =>{
  const foodElement = document.createElement("div")
  foodElement.className = "food"

foodElement.innerHTML = `
<img src="${food.image}" alt= ${food.name}  
<p>${food.name}</p>
<p>${food.price}</p>

`
foodList.appendChild(foodElement)

})

})




displayProducts()