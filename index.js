// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

cats.unshift

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
const removeFirstCat = () => {
     
    return [...cats].splice(0,1)

    
}