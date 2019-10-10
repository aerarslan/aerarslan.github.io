function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("main").style.display="none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.display="block";
}

function openMainNav() {
    document.getElementById("myMainnav").style.width = "250px";
}

function closeMainNav() {
    document.getElementById("myMainnav").style.width = "0";
}