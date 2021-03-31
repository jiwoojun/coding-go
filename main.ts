namespace SpriteKind {
    export const wall = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Projectile, sprites.builtin.forestTiles0, function (sprite, location) {
    game.splash("what do you want to do?")
    if (game.ask("Do you want to win?")) {
        game.over(true)
    } else {
        game.over(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fish_soyeon_wig_quick_UFO_log("fish soyeon wig", true, 1, chick, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, "quick UFO log")
})
function fish_soyeon_wig_quick_UFO_log (text: string, bool: boolean, num: number, mySprite: Sprite, myImage: Image, text2: string) {
    fish = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . f f f f f . f f . . . . 
        . . . f 4 4 4 4 4 f 4 f . . . . 
        . . . f 4 f 4 4 4 f 4 f . . . . 
        . . . f 4 4 4 4 4 f 4 f . . . . 
        . . . . f f f f f . f f . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, chick, 100, 50)
    soyeon = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f d d d f . . . . . . . . 
        . . . f d d d f . . . . . . . . 
        . . . f d d d f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        `, chick, 200, 70)
    wig = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e . e e e e e . 
        . . . e e e e e e e e e e e e e 
        . . e e e e e e e e e e e e e e 
        . e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e . 
        e e e e . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, chick, 300, 90)
    quick = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f f f . 
        . . . f f f f f . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, chick, 400, 110)
    UFO = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 9 9 9 9 f . . . . . 
        . . . . f 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 9 f . . . . 
        . . f f f f f f f f f f f f . . 
        . f 8 f 8 f 8 f 8 f 8 f 8 f f . 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, chick, 500, 130)
    log = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . e e e e e e e e e e e e e . . 
        e e e e e e e e e e e e e e e . 
        . f f f f f f f f f f f f f . . 
        e e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, chick, 600, 150)
    myImage2 = sprites.createProjectileFromSprite(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, chick, 700, 150)
}
let myImage2: Sprite = null
let log: Sprite = null
let UFO: Sprite = null
let quick: Sprite = null
let wig: Sprite = null
let soyeon: Sprite = null
let fish: Sprite = null
let chick: Sprite = null
chick = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f . . . . . . . . . . . 
    f f e 5 f . . . . . . . . . . . 
    f 4 5 5 f f f f f . . . . . . . 
    f f f f 5 5 5 5 f . . . . . . . 
    . . . f 5 5 5 5 f . . . . . . . 
    . . . f 4 f f 4 f . . . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(chick)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(chick)
