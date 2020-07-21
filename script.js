window.addEventListener('load', () => {
    registerServiceWorker()
});

async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./service-worker.js');
        } catch (e) {
            console.log('Service Worker registration failed');
        }
    }
}
        
        
        
        
        
        
        
        
        document.getElementById("header__top--btn").addEventListener('click', () => {
            document.querySelector('.navigation').style.width = "60rem";
            document.querySelector('.navigation-0').style.width = "100%";
        }); 
            //document.querySelector('.home').style.backgroundColor = "rgba(0,0,0,.2)";
        document.getElementById("navigation__page--btn").addEventListener('click', () =>{
            document.querySelector('.navigation').style.width = "0";
            document.querySelector('.navigation-0').style.width = "0";
        });
        /*document.querySelector('.navigation-0').addEventListener('click', () => {
            document.querySelector('.navigation').style.width = '0';
            document.querySelector('.navigation-0').style.width = "0";
        });*/

        /*document.getElementById("add-list-1").onclick = function() {addList()};
        function addList() {
            var el = document.querySelector('.navigation__page--item-inner');
            el.style.height = "70px";
            var el2 = document.querySelector('navigation__page--item-1');
            el2.style.paddingBottom = "100px";
        }*/

           /* var coll = [];
            var i = 1;

            /*document.getElementById('header__top--btn').onclick = function() {
                for(j = 1; j < 6; j++) {
                    coll = document.querySelector('.navigation__page--item-' + j);
                } 
            }*/
                   
 
            /*document.querySelector('.navigation__page--item-' + 1).addEventListener('click', function() {
                    var el = document.querySelector('.navigation__page--item-' + 1 +'-add').textContent;
                    expandeNav(el, 1);
                    i++;
            });


function expandNav(el, i) {
    if (el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-inner').style.height = "25rem";
        coll[i].style.marginBottom = document.querySelector('.navigation__page--item-inner').style.height;
        document.querySelector('.navigation__page--item-' + i + '-add').textContent = "keyboard_arrow_up";
    }
    else if (el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-inner').style.height = 0;
        coll[i].style.marginBottom = 0;
        document.querySelector('.navigation__page--item-' + i + '-add').textContent = "keyboard_arrow_down";
    }
}*/
        /*var coll = document.getElementsByClassName("navigation__page--item");
        var coll2 = document.getElementsByClassName("navigation__page--item-inner");
        var i;
        var j;
        var x = new Array();

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                for(j = 1; j < 6; j++) {
                    x = document.getElementsByClassName("navigation__page--item-i");
                }
                x[i-1].style.marginBottom = coll2[i].scrollHeight + "px";
            });
        } */


/*var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}*/

//NAVIGATION//


document.querySelector('.navigation__page--item-1').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-1-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-1').style.marginBottom = '43rem';
        document.querySelector('.inner-1').style.height = '42rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-1').style.marginBottom = 0;
        document.querySelector('.inner-1').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});

document.querySelector('.navigation__page--item-2').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-2-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-2').style.marginBottom = '36rem';
        document.querySelector('.inner-2').style.height = '35rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-2').style.marginBottom = 0;
        document.querySelector('.inner-2').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});

document.querySelector('.navigation__page--item-3').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-3-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-3').style.marginBottom = '62rem';
        document.querySelector('.inner-3').style.height = '61rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-3').style.marginBottom = 0;
        document.querySelector('.inner-3').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});

document.querySelector('.navigation__page--item-4').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-4-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-4').style.marginBottom = '36rem';
        document.querySelector('.inner-4').style.height = '35rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-4').style.marginBottom = 0;
        document.querySelector('.inner-4').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});

document.querySelector('.navigation__page--item-5').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-5-add');
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-5').style.marginBottom = '36rem';
        document.querySelector('.inner-5').style.height = '35rem';
        arrow.textContent = "keyboard_arrow_up";
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-5').style.marginBottom = 0;
        document.querySelector('.inner-5').style.height = 0;
        arrow.textContent = "keyboard_arrow_down";
    }

});
/*
document.querySelector('.navigation__page--item-2').addEventListener('click', function() {
    var arrow = document.querySelector('.navigation__page--item-2-add').textContent;
    var el = arrow.textContent;

    if(el === 'keyboard_arrow_down') {
        document.querySelector('.navigation__page--item-2').style.marginBottom = '40rem';
        document.querySelector('.inner-2').style.height = '40rem';
        document.querySelector('.navigation__page--item-2-add').textContent = 'keyboard_arrow_down';
    }else if(el === 'keyboard_arrow_up') {
        document.querySelector('.navigation__page--item-2').style.marginBottom = 0;
        document.querySelector('.inner-2').style.height = 0;
        document.querySelector('.navigation__page--item-2-add').textContent = 'keyboard_arrow_up';
    }

});*/

//SEARCH//
document.querySelector('.header__top--search').addEventListener('click', () => {
    document.querySelector('.search').style.height = '100vh';
    document.querySelector('.search__page--input').focus();
});

document.querySelector('.search__page--bar-back').addEventListener('click', () => {
    document.querySelector('.search').style.height = 0;
})



//LOGIN FORM//
/*document.querySelector('.header__top--user').addEventListener('click', () => {
    document.querySelector('.login-signin').style.visibility = 'visible';
    document.querySelector('.login-signin').style.opacity = '1';
    document.querySelector('.login-signin__popup').style.opacity = '1';
    document.querySelector('.login-signin__popup').style.transform = 'translate(-50%, -50%) scale(1)';
   // document.querySelector('.login-signin__popup').style.transform = 'scale(1)';
    document.querySelector('.sign-in').style.display = 'block';
    document.querySelector('.sign-in__heading').style.borderBottom = '2px solid #00bbff';
    document.querySelector('.option-divider-in').classList.remove('login-signin__active');
});
document.querySelector('.login-signin__popup--close-btn').addEventListener('click', () => {
    document.querySelector('.login-signin').style.visibility = 'hidden';
    document.querySelector('.login-sign').style.opacity = '0';
    document.querySelector('.login-signin__popup').style.opacity = '0';
    document.querySelector('.login-signin__popup').style.transform = 'translate(-50%, -50%) scale(.25)';
  //  document.querySelector('.login-signin__popup').style.transform =  'scale(.25)';
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.sign-up').style.display = 'none';
    document.querySelector('.sign-up__heading').style.borderBottom = 'none';
    document.querySelector('.option-divider-up').classList.add('login-signin__active');
});*/

document.querySelector('.profile-link').addEventListener('click', () => {
    document.querySelector('.sign-in__heading').style.borderBottom = '2px solid #00bbff';
    document.querySelector('.option-divider-in').classList.remove('login-signin__active');
    document.querySelector('.sign-up').style.display = 'none';
    document.querySelector('.sign-in').style.display = 'block';
});
document.querySelector('.login-signin__close').addEventListener('click', () => {
    document.querySelector('.sign-up__heading').style.borderBottom = 'none';
    document.querySelector('.option-divider-up').classList.add('login-signin__active');
});


document.querySelector('.option-divider-in').addEventListener('click', () => {
    document.querySelector('.sign-up').style.display = 'none';
    document.querySelector('.sign-in').style.display = 'block';
});
document.querySelector('.option-divider-up').addEventListener('click', () => {
    document.querySelector('.sign-in').style.display = 'none';
    document.querySelector('.sign-up').style.display = 'block';
});

document.querySelector('.option-divider-up').addEventListener('click', () => {
    document.querySelector('.sign-up__heading').style.borderBottom = '2px solid #00bbff';
    document.querySelector('.option-divider-in').classList.add('login-signin__active');

    document.querySelector('.sign-in__heading').style.borderBottom = 'none';
    document.querySelector('.option-divider-up').classList.remove('login-signin__active');

});
document.querySelector('.option-divider-in').addEventListener('click', () => {
    document.querySelector('.sign-in__heading').style.borderBottom = '2px solid #00bbff';
    document.querySelector('.option-divider-in').classList.remove('login-signin__active');

    document.querySelector('.sign-up__heading').style.borderBottom = 'none';
    document.querySelector('.option-divider-up').classList.add('login-signin__active');
});

var keep = 0;
document.querySelector('.keep').addEventListener('click', () => {
    if(keep%2) {
        document.querySelector('.keep-input-btn').textContent = 'check_box';
        document.querySelector('.keep-label').style.color = 'white';
        keep++;
    }else {
        document.querySelector('.keep-input-btn').textContent = 'check_box_outline_blank';
        document.querySelector('.keep-label').style.color = 'rgba(255,255,255,.7)';
        keep++;
    }
});



//notification
document.querySelector('.header__top--notification').addEventListener('click', () => {
    document.querySelector('.notification').style.height = '100vh';
});
document.querySelector('.notification__page--arrow').addEventListener('click', () => {
    document.querySelector('.notification').style.height = '0';
});





//slide-next-prev
/*
document.querySelector('.slide-prev').addEventListener('click', () => {
    document.querySelector('.scroll').style.scrollbar
});
document.querySelector('.slide-next').addEventListener('click', () => {
    //document.querySelector('.scroll').style.paddingLeft = '0';
    document.querySelector('.scroll').style.paddingRight = '50rem';
});

var slideIndex = 0;

function plusSlide(n) {
    slideShow(slideIndex += n);
}

function slideShow(n) {
    var topCatBox = document.getElementsByClassName('topcat__wrp--content-box');

    if(n > topCatBox.length) {
        slideIndex = 0;
    }

    if(n < 3) {
        for(i = 0; i < topCatBox.length; i++) {
            topCatBox[i].style.display = 'none';

        }
    }

    for(i = 0; i < n; i++) {
        topCatBox[i].style.display = 'inline-block';
    }  
}*/



