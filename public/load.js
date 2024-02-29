//sidebar

    fetch('/assets/left.html')
    .then((response) => {
        return response.text();
    })
    .then((asideHTML) => {
        document.getElementById('left').innerHTML = asideHTML
    });

//header
var headerHTML = '<img src="/assets/header.png" alt="starlet sitting with their legs bent, doing a peace sign"><div></div>'
document.getElementById("head").innerHTML = headerHTML

//updates
fetch('/assets/updates.html')
    .then((response) => {
        return response.text();
    })
    .then((updatesHTML) => {
        document.getElementById('updates').innerHTML = updatesHTML
    });



//apply the htmls
document.getElementById("left").innerHTML = asideHTML
document.getElementById("head").innerHTML = headerHTML
