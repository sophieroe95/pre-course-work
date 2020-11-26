//clock//
const clock = document.querySelector('.clock');

const tickingClock = () => {
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const html = `
<span>${leadingZero(hours)}</span> :
<span>${leadingZero(minutes)}</span> :
<span>${leadingZero(seconds)}</span>
`;

clock.innerHTML = html;
};
setInterval(tickingClock, 1000);

const leadingZero = singleDigit => {
if (singleDigit < 10) {
return "0" + String(singleDigit);
} else {
return singleDigit;
}
};

//add user's name to website//
const showname = document.querySelector("#show-name");

showname.addEventListener("click", function showName() {
const userName = document.querySelector("#enter-name").value; 
    
    document.querySelector( 
      "#username").innerHTML = userName; 

    document.querySelector( 
      "#usernameform").innerHTML = userName; 
});

//show and hide text//
const balloons = document.querySelector("#balloons");

balloons.addEventListener("click",function showBalloonText() { 
    element = document.querySelector('.balloons-image-text'); 
    element.style.display = 'block'; 
});

balloons.addEventListener("dblclick",function hideBalloonText() { 
    element = document.querySelector('.balloons-image-text'); 
    element.style.display = 'none'; 
});

const sophie = document.querySelector(".sophie-roe-pic");

sophie.addEventListener("click",function showSophie() { 
    element = document.querySelector('.sophie-roe-img-text'); 
    element.style.display = 'block'; 
});

sophie.addEventListener("dblclick",function hideSophie() { 
    element = document.querySelector('.sophie-roe-img-text'); 
    element.style.display = 'none'; 
});

//scroll//

const ayellowtext = document.querySelector(".ayellow-text");
ayellowtext.addEventListener("scroll",function scrollMakesTextYellow() { 
ayellowtext.style.color = "yellow";
});

const byellowtext = document.querySelector(".byellow-text");
byellowtext.addEventListener("scroll",function scrollMakesTextYellow() { 
byellowtext.style.color = "yellow";
});

//balloon move//
const balloon = document.querySelector("#balloonmovebutton");

balloon.addEventListener("click",function move() { 
    element = document.querySelector('.balloon'); 
    element.style.display = 'block'; 
});

balloon.addEventListener("dblclick",function stop() { 
    element = document.querySelector('.balloon'); 
    element.style.display = 'none'; 
});

//copyright//

const copy = document.querySelector('.copy-right');

copy.addEventListener('copy', () => {
 alert('my content is copyright!');
})

//background slider//

let slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            let i;  
            let slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        } 

        document.querySelector(".left").addEventListener("click", function nextSlide(n) {  
            displaySlides(slide_index += -1); 
        });

        document.querySelector(".right").addEventListener("click", function nextSlide(n) {  
            displaySlides(slide_index += 1); 
        });