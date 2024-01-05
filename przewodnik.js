
let menuOpen = false;
const menu = (menu) =>{
    const nav = document.querySelector("#nav-bar");
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    const bar3 = document.querySelector(".bar3");
    if(!menuOpen){
        menuOpen=true;
        nav.style.left = "0%";
        bar1.style.transform = "translate(0, 1rem) rotate(-45deg)";
        bar2.style.opacity = "0";
        bar3.style.transform = "translate(0, -1.1rem) rotate(45deg)";
    }else{
        menuOpen=false;
        nav.style.left = "-22%";
        bar1.style.transform = "translate(0, 0rem) rotate(0deg)";
        bar2.style.opacity = "1";
        bar3.style.transform = "translate(0, -0rem) rotate(0deg)";
    }
}
const logo = (logo) =>{
    document.querySelector('#menu').style.filter = `blur(0)`;
    document.querySelector('#nav-bar').style.filter = `blur(0)`;
    document.querySelector('section').style.filter = `blur(0)`;
    logo.style.width = `8rem`;
    logo.style.height= `8rem`;
    logo.style.left = 'auto';
    logo.style.right = `0%`;
    logo.style.top = `5%`;
    if(window.innerWidth>600){
        logo.style.width = `5rem`;
        logo.style.height= `5rem`;
        logo.style.right = `5%`;
    }
}
let dropFlag = false; // not dropped
const drop = (x) => {
  const dropMenu = document.querySelector("li");
  if (!dropFlag) {
    dropFlag = true;
    x.style.transform = "rotate(180deg)";
    dropMenu.style.maxHeight = "5rem";
    dropMenu.style.opacity = "1";
  } else {
    dropFlag = false;
    x.style.transform = "rotate(0)";
    dropMenu.style.maxHeight = "0";
    dropMenu.style.opacity = "0";
  }
};









//scrolluj i scrolluj2 odpowiadają za movement strzalki w dół i w górę. goTop odpowiada za ostatnią strzałkę, która ma przenieść nas na górę
const scrolluj = () => {
    const scrollAmount = window.innerWidth <= 576 ? window.innerHeight * 0.98 : window.innerHeight * 0.92;

    scrollBy({
        top: scrollAmount,
        left: 0,
        behavior: "smooth"
    });
};

const scrolluj2 = () => {
    const scrollAmount = window.innerWidth <= 576 ? -window.innerHeight * 0.98 : -window.innerHeight * 0.92;

    scrollBy({
        top: scrollAmount,
        left: 0,
        behavior: "smooth"
    });
};

const goTop = () => {
    const scrollAmount = window.innerWidth <= 576 ? -window.innerHeight * 0.98 : -window.innerHeight * 0.92;

    window.scrollTo({
        top: scrollAmount,
        behavior: 'smooth'
    });
};








let popFlag = false; //check if popup is active
const pop = (object) =>{
    if(!popFlag){
        object.nextElementSibling.style.transform = "translate(-50%, -50%) scale(1)";
    }
    
    popFlag = true;
}

const closePop = (object) =>{
    object.parentElement.style.transform = "translate(-50%, -50%) scale(0)";
    popFlag = false;
}








//Galeria
let popup = false;
const popupPic = document.getElementById("popupPic");
const klik = (e) => {
    const zdjecie = e.firstChild;
    console.log(zdjecie);
    if (!popup) {
        popup = true;
        // Set the source of the popupPic image directly
        popupPic.children[0].src = zdjecie.src;

        // Calculate the maximum width and height for the popup
        const maxWidth = window.innerWidth * 0.8;
        const maxHeight = window.innerHeight * 0.8;

        // Calculate the aspect ratio of the image
        const aspectRatio = zdjecie.width / zdjecie.height;

        // Calculate the maximum width based on the height
        const maxWidthByHeight = maxHeight * aspectRatio;

        // Set the width and height based on the calculated values
        if (maxWidthByHeight > maxWidth) {
            popupPic.style.width = maxWidth + 'px';
            popupPic.style.height = 'auto';
        } else {
            popupPic.style.width = 'auto';
            popupPic.style.height = maxHeight + 'px';
        }
        popupPic.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
        
    }
};

const klikOff = () => {
    popupPic.style.transform = 'translate3d(-50%, -50%, 0) scale(0)';
    popup = false;
};
  
  


// sticky

const stickySections = [...document.querySelectorAll('.sticky')];
window.addEventListener('scroll', (e) =>{
    for(let i=0; i<stickySections.length; i++){
        transform(stickySections[i]);
    }
})


const transform = (section) =>{
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll-section')
    let percentage = ((window.scrollY - offsetTop)/window.innerHeight)*100;
    percentage = percentage < 0 ? 0 : percentage > 336 ? 336 : percentage;
    scrollSection.style.transform = `translateX(-${percentage}vw)`;
    
}
