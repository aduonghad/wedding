var oneSec = 1000;
var oneMin = 1000 * 60;
var oneHours = 1000 * 60 * 60;
var oneDay = 1000 * 60 * 60 * 24;
var oneMonth = 1000 * 60 * 60 * 24 * 30;
var oneYear = 1000 * 60 * 60 * 24 * 30 * 12;

function start() {
    console.log("start");

    let urlString = window.location.href
    let url = new URL(urlString)
    let param = url.searchParams.get('name')

    khanhmoi = new Map([
        ["duyhung", "Bạn Hùng và người bạn đời"],
    ]);

    if (param == null) {
        document.getElementById('content').innerText = "Bạn và người thương"
    } else {
        if (khanhmoi.get(param) == null) {
            document.getElementById('content').innerText = "Bạn và người thương"
        } else {
            document.getElementById('content').innerText = khanhmoi.get(param)
        }
    }

    countdowTimeNhaGai();
    countdowTimeNhaTrai();
}

start();

document.onclick = function () {
    document.getElementById("my_audio").play();
}

setInterval(function () {
    countdowTimeNhaGai();
    countdowTimeNhaTrai();
}, 1000);

function countdowTimeNhaTrai() {
    let curTime = Date.now();
    let targetTime = new Date(2021, 11, 18, 17, 0, 0, 0);
    let timeStemp = targetTime - curTime;
    if (timeStemp < 0) { timeStemp = new Date() - targetTime; }
    let time = new Date(new Date(1970).getTime() + timeStemp);
    let year = time.getFullYear() - 1970;
    let month = time.getMonth() + 1;
    let day = time.getDay();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    document.getElementById("COUNTDOWN_ITEM424").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${year}</span>`;
    document.getElementById("COUNTDOWN_ITEM425").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${month}</span>`;
    document.getElementById("COUNTDOWN_ITEM426").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${day}</span>`;
    document.getElementById("COUNTDOWN_ITEM427").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${hours}</span>`;
    document.getElementById("COUNTDOWN_ITEM428").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${min}</span>`;
    document.getElementById("COUNTDOWN_ITEM429").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${sec}</span>`;
}

function countdowTimeNhaGai() {
    let curTime = Date.now();
    let targetTime = new Date(2021, 11, 17, 16, 0, 0);
    let timeStemp = targetTime - curTime;
    if (timeStemp < 0) { timeStemp = new Date() - targetTime; }
    let time = new Date(new Date(1970).getTime() + timeStemp);
    let year = time.getFullYear() - 1970;
    let month = time.getMonth() + 1;
    let day = time.getDay();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    document.getElementById("COUNTDOWN_ITEM436").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${year}</span>`;
    document.getElementById("COUNTDOWN_ITEM437").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${month}</span>`;
    document.getElementById("COUNTDOWN_ITEM438").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${day}</span>`;
    document.getElementById("COUNTDOWN_ITEM439").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${hours}</span>`;
    document.getElementById("COUNTDOWN_ITEM440").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${min}</span>`;
    document.getElementById("COUNTDOWN_ITEM441").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${sec}</span>`;
}

function getAmountYear(stemp) {
    return Math.floor(stemp / oneYear);
}

function getAmountMonth(stemp) {
    return Math.floor(stemp / oneMonth);
}

function getAmountDay(stemp) {
    return Math.floor(stemp / oneDay);
}

function getAmountHours(stemp) {
    return Math.floor(stemp / oneHours);
}

function getAmountMin(stemp) {
    return Math.floor(stemp / oneMin);
}

function getAmountSec(stemp) {
    return Math.floor(stemp / oneSec);
}