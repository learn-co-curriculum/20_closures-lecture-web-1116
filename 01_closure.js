function minimumAgeChecker(minimumDrinkingAge) {
  var min = minimumDrinkingAge
  return function (age) {
    return age >= min
  }
}

const canDrinkInUSA = minimumAgeChecker(21)
const canDrinkinCanada = minimumAgeChecker(19)
const canDrinkinQuebec = minimumAgeChecker(18)
const canDrinkInIreland = minimumAgeChecker(12)


const greetInUSA = greetingCreator("Hello")
greetInUSA('Franco') // "Hello, Franco"


function greetingCreator(greeting){
  return function (name){
    return greeting + ', ' + name
  }
}



function minimumDrinkingAgeChecker(minimum){

  function isOldEnough(age){
    return age >= minimum
  }

  function notOldEnough(age){
    return age < minimum
  }

  return {
    isOldEnough, notOldEnough
  }


}
