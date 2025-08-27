// navbar scroll
const header = document.querySelector("header");

window.addEventListener("scroll",()=>{
if(scrollY > 10){
    header.classList.add("scrolled");
}
    else{
        header.classList.remove("scrolled");
}
})


// Theme Toggle
const theme_toggle = document.querySelector('.theme-toggle');
theme_toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  theme_toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});



// Typing Effect
const text = ["Frontend Developer", "Web Developer","Web Designer","React JS Developer"];

const typing_text = document.querySelector("#typing_text");

//variables
let index = 0;
let charIndex = 0;
let isDelete = false;

function typingText(){
    const currPhrase = text[index];
    const currText = currPhrase.slice(0, charIndex);
    typing_text.textContent = currText;

if(!isDelete && charIndex < currPhrase.length){
    charIndex++;
    setTimeout(typingText, 100);
}
else if(isDelete && charIndex > 0){
    charIndex--;
    setTimeout(typingText, 100);
}
else{
    if(!isDelete){
        isDelete = true;
        setTimeout(typingText, 1000);
    }
    else{
        isDelete = false;
        index = (index + 1) % text.length;
        setTimeout(typingText, 500);
    }
}

}

typingText();

// scrolling animation appear

 AOS.init();
