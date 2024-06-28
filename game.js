/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Floor is lava
@author: Sawyer
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const floor = "f"
const floor2 ="g"
const background = "b"
const Platform = "a"
setLegend(
    [player, bitmap`
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
    ....00....00....` ],
    [floor, bitmap`
    9933399999999999
    9333999999993339
    9933993339993339
    9999993339993339
    9999933339333999
    9C99933399933999
    9C9993339999CC9C
    CC99939933999CCC
    CCC999993999C99C
    CCC9999939999999
    CCCC9999399CCCCC
    CCCCC99339CCCCCC
    CCCCCC999CCCCCCC
    CCCCCCCCCCCC333C
    CCCCCCCCCCCC333C
    CCCCCCCCCCC333CC` ],
    [floor2, bitmap`
    9999999999933399
    9333999999993339
    9333999333993399
    9333999333999999
    9993339339999999
    99933999993999C9
    C9999999933999C9
    C9999999993999CC
    C99C9999999CCCCC
    CC9CC99999CCCCCC
    CC9CCCCCCCCCCCCC
    CCCCCCCCCCCCCCCC
    CCCCCCCCCCCCCCCC
    C333CCCCCCCCCCCC
    C333CCCCCCCCCCCC
    CC333CCCCCCCCCCC` ],
    [background, bitmap`
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000
    0000000000000000`],
    [Platform, bitmap`
    LLLLLLLLLLLLLLLL
    LLLLLLLLLLLLLLLL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LL111111111111LL
    LLLLLLLLLLLLLLLL
    LLLLLLLLLLLLLLLL` ]
    )


setSolids([player, Platform])
setBackground("b")
let level = 0
const levels = [
    map`
..........
..........
.a........
......aa..
...aa.....
..........
.p........
ggfgfgfgfg`
]

setMap(levels[level])
setPushables({
    [player]: []
})
onInput("s", () => {
    tick()
})
// onInput("w", () => {
//     getFirst(player).y -= 1
// })
onInput("a", () => {
    getFirst(player).x -= 1
})
onInput("d", () => {
    getFirst(player).x += 1
})
onInput("j", () => {
    jump(3)
})

afterInput(() => {
})

class coords{
    coords(sprite){
        x= sprite.x
        y= sprite.y
    }
}

function getCoordinates(sprite){
    return coords(sprite);
}
function jump(distance){
    for (let i = 0; i < distance; i++) {
      setTimeout(function() {getFirst(player).y -= 1}, 100);
    }
}
function tick(){
    
    if(getCoordinates(player) ) {
    }
    getFirst(player).y += 1 
}
setInterval(tick, 200)
