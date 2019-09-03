let string = ""
function dwarfRollCall(dwarves) {
  for (let i = dwarves.length / 2; i < dwarves.length; i++){
    string += (`${i + 1}  ${dwarves[i]} `)
  }
  return string
}

function summonCaptainPlanet(planeteerCalls){
  let randomArray = []
  for(let i = 0;i < planeteerCalls.length; i++){
  randomArray.push(`${planeteerCalls[i].toUpperCase()}!`)
    }
    return randomArray;
}


function longPlaneteerCalls(words) {
  if(words.length < 4){
    return false }
    else {
    return true;
  }
}

// if (cheeses.includes()


function findTheCheese (foods) {
  for(let i =0; i < foods.length; i++)
  {
  if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert' || foods[i] === 'swiss')
    {
      return foods[i];
    } 
  } 
  return 'no cheese!';
  }
  
  
  function wordsWithB (randomFoods){
    let newRFoods = []
    for(let i = 0; i < randomRFoods.lenth; i++)
    {
      if(randomFoods[i].startswith("B") ){
        newRFoods.push(randomFoods[i])
      }
    }
    return newRFoods
  }
 
 