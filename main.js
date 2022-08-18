import './src/style.css'
import './src/normalize.css'
import './src/header.css'
import './src/info.css'
import './src/directions.css'
import './src/lessons.css' 
import './src/videolesson.css' 
import './src/reviews.css' 
import './src/footer.css'
import './src/tablet.css'



import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
new Splide( '.splide' ).mount();


let menu = document.getElementById('menuButton');
let activeMenu = document.getElementById('mainMenu');
let closeBtn = document.getElementById('closeMenu');

menu.addEventListener("click", () => {
    activeMenu .style.display = "inherit"
})
closeBtn.addEventListener("click", () => {
    activeMenu .style.display = "none"
})






