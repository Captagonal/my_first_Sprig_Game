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
  ...0000000000...
  ...0777777770...
  .00070277027000.
  .07770277027770.
  .07077777777070.
  .00077CCCC77070.
  ...077777777000.
  ...0333333330...
  ...0333333330...
  ...0333333330...
  ...0330000330...
  ...0330..0330...
  ...0000..0000...
  ................` ]
  )
  

setSolids([])

let level = 0
const levels = [
  map`
p..........
...........
...........
...........
...........
...........
...........
...........
...........
...........
...........`
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