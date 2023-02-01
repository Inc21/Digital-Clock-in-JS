{ function showTime() {
    var time = new Date();
    var h = time.getHours(); // 0 -23
    var m = time.getMinutes(); // 0 - 59
    var s = time.getSeconds(); // 0 - 59

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}}

showTime();

/* function showMyDate() {
    var date = Object.create(date);
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth(); 
    var s = date.getFullYear();

    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    y = (y < 10) ? "0" + y : y;

    var date = d + ":" + m + ":" + y;
    document.getElementById("myDateDisplay").innerText = date;
    document.getElementById("myDateDisplay").textContent = date;

}

 showMyDate();

 */