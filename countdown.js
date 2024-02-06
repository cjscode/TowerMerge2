setInterval(() => {
    let end = Date.UTC(2024, 2, 1, 18, 0, 0, 0)
    let togo = (end - Date.now()) / 1000
    var d = String(Math.floor(togo / (3600 * 24))).padStart(2,"0")
    var h = String(Math.floor(togo % (3600 * 24) / 3600)).padStart(2,"0")
    var m = String(Math.floor(togo % 3600 / 60)).padStart(2,"0")
    var s = String(Math.floor(togo % 60)).padStart(2,"0")
    document.querySelector("#countdown").innerHTML = `${d}:${h}:${m}:${s}`
}, 500)
let end = Date.UTC(2024, 2, 1, 18, 0, 0, 0)
let togo = (end - Date.now()) / 1000
let d = String(Math.floor(togo / (3600 * 24))).padStart(2,"0")
let h = String(Math.floor(togo % (3600 * 24) / 3600)).padStart(2,"0")
let m = String(Math.floor(togo % 3600 / 60)).padStart(2,"0")
let s = String(Math.floor(togo % 60)).padStart(2,"0")
document.querySelector("#countdown").innerHTML = `${d}:${h}:${m}:${s}`