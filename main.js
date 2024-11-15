var menu = document.querySelector('.menu');
var btn = document.querySelector('.btn');

var show = function(){
    menu.classList.add("team");
    btn.classList.add('btn2');
    btn.querySelector('i').classList.add('fa-times');
    menu.removeEventListener('animationend', ochir);
}

var hide = function(){
    menu.classList.add("hide");
    btn.classList.remove('btn2');
    btn.querySelector('i').classList.remove('fa-times');  
    menu.addEventListener('animationend', ochir);
}
var ochir = function(){
    menu.classList.remove('team', 'hide');
}

btn.addEventListener('click', function() {
    if(btn.classList.contains('btn2')){
        hide();
    } else {
        show();
    }
});