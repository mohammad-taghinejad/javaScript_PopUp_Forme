var login = document.querySelectorAll('.login')[0];
var modal = document.querySelectorAll('.modal')[0];
var close = document.querySelectorAll('.close')[0];

login.onclick = function () {
    modal.style.display = 'block';
};

close.onclick = function () {
    modal.style.display = 'none';
};

/*
modal.onclick = function () {
    modal.style.display = 'none';
};
*/
