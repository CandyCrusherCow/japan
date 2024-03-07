function reply_click(food){

console.log(food)
    fetch(`https://japan-food-reccomendations.onrender.com/api/${food}`)
.then(res => res.json())
.then (data => {console.log(data)
//     let i = Math.round(Math.random()*(data.drinks.length))
 console.log(data[0])
  document.querySelector('h3').innerText = data[0].name
  document.querySelector('h4').innerText = data[0].location
  document.getElementById('foodDescript').innerText = data[0].description
  if(food === 'kaiseki'){document.getElementById('foodImg').classList.toggle('Hidden')}
  else{
  document.getElementById('foodImg').classList.remove('Hidden')
  document.getElementById('foodImg').src = data[0].image}
//  document.querySelector('a').href = data.drinks[i].strVideo
})
.catch(err => {
    console.log(`error ${err}`)
})
}
