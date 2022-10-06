window.onload = pageLoad;
function pageLoad() {
    var clickbutton = document.getElementById("myProject");
    clickbutton.onclick;

    var twitterbutton = document.getElementById("twitter");
    twitterbutton.onclick = twitterlinklocation;

    var instagrambutton = document.getElementById("instagram");
    instagrambutton.onclick = instagramlinklocation;

    var facebookbutton = document.getElementById("facebook");
    facebookbutton.onclick = facebooklinklocation;

    var githubbutton = document.getElementById("github");
    githubbutton.onclick = githublinklocation;
}

function twitterlinklocation() {
    location.href = "https://twitter.com/Soyybad1";
}
function facebooklinklocation() {
    location.href = "https://www.facebook.com/khunanon.ngaobenjakul/";
}
function githublinklocation() {
    location.href = "https://github.com/Thiskk040";
}
function instagramlinklocation() {
    location.href = "https://www.instagram.com/thiskkay/";
}