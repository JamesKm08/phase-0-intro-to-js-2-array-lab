// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = 'Ralph'){
    cats.push(name);
}

function destructivelyPrependCat(name = "Bob"){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let newCat = [...cats, name];
    return newCat
}

function prependCat(name){
    let newCat = [name, ...cats];
    return newCat
}

function removeLastCat(){
    let newCat = cats.slice(0, cats.length - 1);
    return newCat
}

function removeFirstCat(){
    let newCat = cats.slice(1);
    return newCat
}