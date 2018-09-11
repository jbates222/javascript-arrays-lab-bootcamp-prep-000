// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  var k1 = [ ...kittens, name]
  return k1
}
function prependKitten(name) {
  var k2 = [name, ...kittens]
  return k2
}
function removeLastKitten(name) {
  var k3 = [kittens]
  k3.slice(0, k3.length - 1) 
  return k3
}