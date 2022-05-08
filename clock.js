const myName = document.getElementById('myName');
const myClock = document.getElementById('myClock');

var firstName = prompt("Lütfen Adınızı giriniz :");
myName.innerHTML = `${firstName}`;

function showTime() {
    const myClock = document.getElementById('myClock');
    let second= new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour= new Date().getHours();

    var date = new Date();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var günBilgisi= gunler[date.getDay()]

    myClock.innerHTML = `${hour}:${minute}:${second} ${günBilgisi}`;
}
setInterval(showTime, 1000);
showTime();