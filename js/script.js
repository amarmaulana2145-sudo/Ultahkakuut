// Loader
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);

});

// Tombol Open Gift
const openGift = document.getElementById("openGift");
const hero = document.querySelector(".hero");
const gallery = document.getElementById("gallery");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicToggle.textContent="🔊";

    }else{

        music.pause();

        musicToggle.textContent="🔇";

    }

});
openGift.addEventListener("click", function () {

hero.classList.add("hide");

setTimeout(() => {

    hero.style.display = "none";

    gallery.classList.remove("hidden");

    setTimeout(() => {

        gallery.classList.add("show");

        music.play();

    },100);

},800);

});

const memories = document.querySelectorAll(".memory");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});

memories.forEach(memory => {

    observer.observe(memory);

});

const openLetter = document.getElementById("openLetter");

const letter = document.getElementById("letter");

const typingText = document.getElementById("typingText");

const message = `Dear Kak Febby,

Selamat ulang tahun.

Since you came into my life, everything has become brighter and more meaningful.

Di hari yang spesial ini aku harap kakak panjang umur, sehat selalu dan wishlist kakak bisa terwujud satu persatu.

Thank you for being the best part of my every day.

Happy Birthday ❤️

— Amar`;

let index = 0;

const endingMessage = document.getElementById("endingMessage");

function typeLetter(){

    if(index < message.length){

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }else{

        endingMessage.classList.remove("hidden");

    }

}

openLetter.addEventListener("click",()=>{

    openLetter.classList.add("open");

    setTimeout(()=>{

        letter.classList.remove("hidden");

        letter.classList.add("show");

        typingText.innerHTML = "";

        index = 0;

        typeLetter();

    },600);

});
const transition = document.getElementById("transition");

openGift.addEventListener("click", function () {

    hero.classList.add("hide");

   transition.classList.add("show");

setTimeout(() => {

    transition.classList.remove("show");
    transition.classList.add("hide");

    hero.style.display = "none";

    gallery.classList.remove("hidden");
    gallery.classList.add("show");

    music.play().catch(() => {});

},2500);

});

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="🤍";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,500);

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

document.querySelectorAll(".memory img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImage.src=img.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});




// ===========================
// Scroll Progress Bar
// ===========================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop/scrollHeight)*100;

    progressBar.style.width =
        progress + "%";

});



// ===========================
// Floating Dust
// ===========================

const dustContainer = document.getElementById("dust");

function createDust(){

    const dust = document.createElement("div");

    dust.className = "dust";

    dust.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 3 + 2;

    dust.style.width = size + "px";

    dust.style.height = size + "px";

    dust.style.animationDuration = (8 + Math.random() * 8) + "s";

    dust.style.opacity = Math.random() * 0.5 + 0.2;

    dustContainer.appendChild(dust);

    setTimeout(() => {

        dust.remove();

    },16000);

}

setInterval(createDust,700);
