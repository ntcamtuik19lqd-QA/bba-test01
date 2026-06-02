let powerUP = "mushroom"
let effect = ""
if (powerUP === "mushroom") {
    effect = "Mario becomes Supper"
} else {
    if (powerUP === "flower") {
        effect = "Mario can shoot fireballs"
    } else {
        if (powerUP === "star") {
            effect = "Mario is invincible!"
        } else {
            effect = "Mario is normal"
        }
    }
}
console.log(effect)