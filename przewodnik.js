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
        nav.style.left = "-20%";
        bar1.style.transform = "translate(0, 0rem) rotate(0deg)";
        bar2.style.opacity = "1";
        bar3.style.transform = "translate(0, -0rem) rotate(0deg)";
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





// document.addEventListener('DOMContentLoaded', function () {
//     //2 lines below are for initial position of second section
//     const secondPic = document.querySelector("#jpg-drugi").style.transform = "translateX(200vw)";
//     const secondText = document.querySelector("#tekst-drugi").style.transform = "translateX(-200vw)";

//     const targetDownElement = document.querySelector('#sekcja-druga');
//     const snapDownPosition = targetDownElement.getBoundingClientRect().top + window.scrollY;

//     const targetDownElement2 = document.querySelector('#sekcja-trzecia');
//     const snapDownPosition2 = targetDownElement2.getBoundingClientRect().top + window.scrollY;
    
//     const targetUpElement = document.querySelector('#sekcja-pierwsza');
//     const snapUpPosition = targetUpElement.getBoundingClientRect().top + window.scrollY;
    
//     // Introduce a flag to track whether the function has already executed
//     let hasDownFunctionExecuted = false;  //flag for the first function
//     let hasUpFunctionExecuted = true;  //flag for the second function
//     let hasDownFunctionExecuted2 = false;  //flag for the third function


//     window.addEventListener('scroll', function () {
//         const scrollY = window.scrollY;
//         const scrollThreshold = 300;

//         if (!hasDownFunctionExecuted && Math.abs(scrollY - snapDownPosition) < scrollThreshold) {

//             DownFunctionToExecuteOnSnap();
            
//             // Set the flag to true to prevent further executions
//             hasDownFunctionExecuted = true;
//         } else if (hasDownFunctionExecuted && Math.abs(scrollY - snapDownPosition) >= scrollThreshold) {
//             // Reset the flag if the user scrolls away from the snap position
//             hasDownFunctionExecuted = false;
//         }
//     });

//     window.addEventListener('scroll', function () {
//         const scrollY = window.scrollY;
//         const scrollThreshold = 400;

//         if (!hasUpFunctionExecuted && Math.abs(scrollY - snapUpPosition) < scrollThreshold) {

//             UpFunctionToExecuteOnSnap();
            
//             // Set the flag to true to prevent further executions
//             hasUpFunctionExecuted = true;
//         } else if (hasUpFunctionExecuted && Math.abs(scrollY - snapUpPosition) >= scrollThreshold) {
//             // Reset the flag if the user scrolls away from the snap position
//             hasUpFunctionExecuted = false;
//         }
//     });


//     window.addEventListener('scroll', function () {                             //scroll down 2
//         const scrollY = window.scrollY;
//         const scrollThreshold = 300;

//         if (!hasDownFunctionExecuted2 && Math.abs(scrollY - snapDownPosition2) < scrollThreshold) {

//             DownFunctionToExecuteOnSnap2();
            
//             // Set the flag to true to prevent further executions
//             hasDownFunctionExecuted2 = true;
//         } else if (hasDownFunctionExecuted2 && Math.abs(scrollY - snapDownPosition2) >= scrollThreshold) {
//             // Reset the flag if the user scrolls away from the snap position
//             hasDownFunctionExecuted2 = false;
//         }
//     });

// });

// function DownFunctionToExecuteOnSnap() {

//     //section1 disappear
//     const firstPic = document.querySelector("#jpg-pierwszy")
//     const firstText = document.querySelector("#tekst-pierwszy")
//     firstPic.style.transform = "translateX(-200vw)";
//     firstPic.style.opacity = "0";
//     firstText.style.transform = "translateX(200vw)";
//     firstText.style.opacity = "0";

//     //section2 appear
//     const secondPic = document.querySelector("#jpg-drugi")
//     const secondText = document.querySelector("#tekst-drugi")
//     secondPic.style.transform = "translateX(0vw)";
//     secondText.style.transform = "translateX(0vw)";
//     secondPic.style.opacity = "0.8";
//     secondText.style.opacity = "1";


//     //arrow1 disappear
//     const strzalka = document.querySelector("#arrows-body-1");
//     strzalka.style.visibility = "hidden";

//     //arrow2 appear
//     const strzalkaDruga = document.querySelector("#arrows-body-2");
//     strzalkaDruga.style.visibility = "visible";
// }
// function UpFunctionToExecuteOnSnap() {
//     const firstPic = document.querySelector("#jpg-pierwszy")
//     const firstText = document.querySelector("#tekst-pierwszy")
//     firstPic.style.transform = "translateX(0vw)";
//     firstPic.style.opacity = "0.8";
//     firstText.style.transform = "translateX(0vw)";
//     firstText.style.opacity = "1";



//     const secondPic = document.querySelector("#jpg-drugi")
//     const secondText = document.querySelector("#tekst-drugi")
//     secondPic.style.transform = "translateX(200vw)";
//     secondPic.style.opacity = "0";
//     secondText.style.transform = "translateX(-200vw)";
//     secondText.style.opacity = "0";


//     const strzalka = document.querySelector("#arrows-body-1");
//     strzalka.style.visibility = "visible";

//     const strzalkaDruga = document.querySelector("#arrows-body-2");
//     strzalkaDruga.style.visibility = "hidden";
// }

// function DownFunctionToExecuteOnSnap2(){
//     const secondPic = document.querySelector("#jpg-drugi")
//     const secondText = document.querySelector("#tekst-drugi")
//     secondPic.style.transform = "translateX(200vw)";
//     secondPic.style.opacity = "0";
//     secondText.style.transform = "translateX(-200vw)";
//     secondText.style.opacity = "0";
// }




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
const klikOff = () =>{
    popupPic.style.transform = "translate(-50%, -50%) scale(0)";
    popup=false;
}

const klik = (e) => {
const zdjecie = e.firstChild;
if (!popup) {
    popup = true;
    popupPic.children[0].src = zdjecie.src;

    const maxWidth = window.innerWidth * 1;
    const maxHeight = window.innerHeight * 1;

    const aspectRatio = img.width / img.height;
    const maxWidthByHeight = maxHeight * aspectRatio;

    if (maxWidthByHeight > maxWidth) {

    img.style.width = maxWidth + 'px';
    img.style.height = "auto";
    } else {

    img.style.width = "auto";
    img.style.height = maxHeight + 'px';
    }
    popupPic.style.width = img.offsetWidth + 'px';
    popupPic.style.height = img.offsetHeight + 'px';
    popupPic.style.transform = "translate(-50%, -50%) scale(0.8)";
}
};
  
  
