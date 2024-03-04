

// function reply_click(clicked_id)
//   {
//     var food= clicked_id
//       console.log(clicked_id);
//   }

//   document.getElementById(`${clicked_id}`).addEventListener('click',getRec)

function reply_click(food){

console.log(food)
    fetch(`https://japan-food-reccomendations.onrender.com/api/${food}`)
.then(res => res.json())
.then (data => {console.log(data)
//     let i = Math.round(Math.random()*(data.drinks.length))
// console.log(data.drinks[i])
//  document.querySelector('h2').innerText = data.drinks[i].strDrink
//  document.querySelector('img'). src = data.drinks[i].strDrinkThumb
//  document.querySelector('a').href = data.drinks[i].strVideo
// document.querySelector('h3').innerText = data.drinks[i].strInstructions
// let ingredientList ='Ingredient List\n'
// let totalCount = 15
// for(let a = 0; a < totalCount; a++){
//     const lookupIngredient = 'strIngredient' + (a +1)
//     const lookupMeasue = 'strMeasure' + (a +1)
//     const newIngredient = data.drinks[i][lookupIngredient]
//     const newMeasure = data.drinks[i][lookupMeasue]
//     if(newIngredient && newMeasure) ingredientList += `${newMeasure} of ${newIngredient}\n`
// }
// console.log({ingredientList})
// document.querySelector('p').innerText = ingredientList
})
.catch(err => {
    console.log(`error ${err}`)
})
}
