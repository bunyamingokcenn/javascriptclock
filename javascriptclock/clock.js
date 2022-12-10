let userName = prompt("Lütfen Adinizi Giriniz")

let info = document.querySelector("#myName")

if (userName) {
    info.innerHTML = `${userName}`
    
}
else {
    alert("Boş bırakılamaz. Lütfen adınızı giriniz.")
    location.reload();
}


const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
function showTime() {
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    document.querySelector("#myClock").innerHTML = `${hour}: ${minute}: ${second}  ${day}`
}

setInterval(showTime, 1000);
showTime();


