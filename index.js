const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const Cats = cats.slice()
    Cats.push(name)
    return Cats
}
function prependCat(name) {
    const Cats = cats.slice()
    Cats.unshift(name)
    return Cats 
}
function removeLastCat() {
    const Cats = cats.slice()
    Cats.pop()
    return Cats
}
function removeFirstCat() {
    const Cats = cats.slice()
    Cats.shift()
    return Cats
}