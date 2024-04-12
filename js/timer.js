const myInterval = setInterval(updateTime,1000);

function updateTime() {
    const date = new Date();

    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}