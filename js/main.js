const swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    // If we need pagination dot
    pagination : {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window is >= 1024px
      768: {
          slidesPerView: 2,
          spaceBetween:20,
      },
      // when window is >= 1024px
      1024: {
          slidesPerView: 2,
          spaceBetween:20,
      }
    }
  });
  

  window.onload = ()=> {
      document.getElementById("loading").style.display = "none";
  };





// window.addEventListener('load',() => document.getElementById("loading").style.display = "none");


// Store a copy of the fetch function
var _oldFetch = fetch; 

// Create our new version of the fetch function
window.fetch = function(){

    // Create hooks
    var fetchStart = new Event( 'fetchStart', { 'view': document, 'bubbles': true, 'cancelable': false } );
    var fetchEnd = new Event( 'fetchEnd', { 'view': document, 'bubbles': true, 'cancelable': false } );
    
    // Pass the supplied arguments to the real fetch function
    var fetchCall = _oldFetch.apply(this, arguments);
    
    // Trigger the fetchStart event
    document.dispatchEvent(fetchStart);
    
    fetchCall.then(function(){
        // Trigger the fetchEnd event
        document.dispatchEvent(fetchEnd);
    }).catch(function(){
        // Trigger the fetchEnd event
        document.dispatchEvent(fetchEnd);
    });
    
    return fetchCall;
};

document.addEventListener('fetchStart', function() {
    console.log("Show spinner");
});

document.addEventListener('fetchEnd', function() {
    console.log("Hide spinner");
});

fetch('https://ipinfo.io/json');
fetch('https://ipinfo.io/json');
fetch('https://ipinfo.io/json');