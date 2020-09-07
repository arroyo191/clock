function show() {
    var clock = new Date(); 
var hour = clock.getHours();
var min = clock.getMinutes();
var secon = clock.getSeconds();
var am = "AM";

if (hour == 0) {
    hour = 12;
};

if (hour > 12) {
    hour = hour - 12;
    am = "PM";
};

if (hour < 10){
    hour = "0" + hour;
};
if (min < 10) {
    min = "0" + min;
};
if (secon < 10) {
    secon = "0" + secon;
};
var time = `${hour}:${min}:${secon} ${am}`;
var el = document.getElementById("display-time");
el.textContent = time;
t = setTimeout(show, 500);
};
