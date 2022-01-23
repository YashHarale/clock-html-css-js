setInterval( () => {

    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2 ;// Formula to calculate rotation of hour hand
    mrotation = 6*mtime; // Formula to calculate rotation of hour hand
    srotation = 6*stime; // Formula to calculate rotation of sec hand

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`

} , 1000);