/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
setLegend(
    [ player, bitmap`
    ................
    ................
    ................
    ................
    ................
    .....000000.....
    ....00000000....
    ....0LLLLLL0....
    ....L02LL02L....
    ....L02LL02L....
    ....LLLLLLLL....
    ....LLCCCLLL....
    ....0LL00LL0....
    ....00000000....
    ....00....00....
    ....00....00....` ]
  )
  

setSolids([])

let level = 0
const levels = [
  map`
p........
.........
.........
.........
.........
.........
.........
.........
.........`
]

setMap(levels[level])
setPushables({
  [ player ]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})
onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
})
onInput("d", () => {
  getFirst(player).x += 1
})

afterInput(() => {

})