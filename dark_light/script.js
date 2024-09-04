var btn = document.getElementById("theme-button"); 
var link = document.getElementById("theme-link"); 
 
//Выполняем функцию по клику
btn.addEventListener("click", function () { ChangeTheme(); });

//Функция "ChangeTheme"
function ChangeTheme()
{
    //Объявляем переменные и присваиваем им значения
	let lightTheme = "css/light.css";
    let darkTheme = "css/dark.css";
    var currTheme = link.getAttribute("href");
    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
    }
    else
    {    
   	 currTheme = lightTheme;
    }
    link.setAttribute("href", currTheme);
}

var i = 0;
var image = document.getElementById("light");
const buttonEl = document.getElementById('theme-button');
var imgs = new Array("img/dark.jpg", "img/light.png");

buttonEl.onclick = function() {
    i++; 
    if(i >= imgs.length) i=0;  
    image.src = imgs[i]; 
}