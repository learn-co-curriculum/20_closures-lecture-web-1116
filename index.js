// A function with a function inside of it
// the inner function has the scope of the outer function

var minimumDrinkingAge = 21
var somethingPublic = "Secret"


function canDrink(age){
  return age >= minimumDrinkingAge
  somethingPublic
}

canDrink(21) // true

canDrink(20) // false

minimumDrinkingAge = 19

canDrink(20) // true
