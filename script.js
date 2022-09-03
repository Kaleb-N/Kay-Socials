// sidebar 
const menuItems = document.querySelectorAll('.menu-item');

// messages
const messageNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// sidebar
// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

// give all menu items active class when they are clicked
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        // show notification popup when clicked
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            // hide notification count
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
    
})


// === messages === 
// searching for chats 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        //let name = user.querySelectorAll('h5').textContext.toLowerCase();
        let name = user.innerHTML.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);

// highlight message card
messageNotification.addEventListener('click', () => {
    // hide message count
    messageNotification.querySelector('.notification-count').style.display = 'none';
    // adding box shadow when clicked
    messages.style.boxShadow = '0 0 1.5rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2500);
})


// Theme/display customization
//open theme modal when clicked
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close theme modal when clicked outside theme card
/*const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}*/
document.addEventListener('click', function(e) {
    //if (themeModal.contains(e.target))
    if (themeModal === e.target){
        themeModal.style.display = "none";
    }
})

//theme.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


// ======= FONTS =========
//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        size.classList.toggle('active');
        let fontSize;

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })

})

// ======= COLORS ===== 
// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change primary colors 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // remove active class from colors
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 352;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 252;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// THEME BACKGROUND
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

/*Bg1.addEventListener('click', () => {

    // add active class
    Bg1.classList.add('active');
    //remove active class from others
    //Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from locale storage
    window.location.reload();
})*/

Bg1.addEventListener('click', () => {
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    // add active class
    Bg1.classList.add('active');
    //remove active class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})










/*window.addEventListener("load", () => {

    const messageSearch = document.getElementById('message-search');
    const message = messages.querySelectorAll('.message');

    messageSearch.onkeyup = () => {
        // (B1) GET CURRENT SEARCH TERM
        let search = messageSearch.value.toLowerCase();
        console.log(search);
        // (B2) LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
        for (let i of message) {
          let item = i.innerHTML.toLowerCase();
          if (item.indexOf(search) != -1) { i.style.display = 'flex'; }
          else { i.style.display = 'none'; }
        }
    };
});*/



