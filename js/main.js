let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');
var previusWidth = window.innerWidth;

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open
}

openHam.addEventListener('click', () => hamburgerEvent('flex', 'block', 'none'));
closeHam.addEventListener('click', () => hamburgerEvent('none', 'none', 'flex'));

window.onresize = () => {
    if (window.innerWidth >= 769 && previusWidth < 769) {
        hamburgerEvent('flex', 'block', 'none');
    }else if(window.innerWidth < 769 && previusWidth >= 769){
        hamburgerEvent('none', 'none', 'flex');
    }

    previusWidth = window.innerWidth;
}