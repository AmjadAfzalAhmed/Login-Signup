
let faceLink = document.getElementById('facebook');
let googleLink = document.getElementById('google');
let appleLink = document.getElementById('apple');
let phoneLink = document.getElementById('phone');


faceLink.onclick = function() {
    window.location.href = 'https://www.facebook.com';
};

googleLink.onclick = function() {
    window.location.href = 'https://www.google.com';
};

appleLink.onclick = function() {
    window.location.href = 'https://www.apple.com';
};

phoneLink.onclick = function() {
    window.location.href = 'https://www.your-phone-url.com'; 
};
