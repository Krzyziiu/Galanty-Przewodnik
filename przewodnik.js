
let menuOpen = false;
const menu = (menu) =>{
    const nav = document.querySelector("#nav-bar");
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    const bar3 = document.querySelector(".bar3");
    if(!menuOpen){
        menuOpen=true;
        nav.style.left = "0%";
        bar1.style.transform = "translate(0, 1.3rem) rotate(-45deg)";
        bar2.style.opacity = "0";
        bar3.style.transform = "translate(0, -1.3rem) rotate(45deg)";
    }else{
        menuOpen=false;
        nav.style.left = "-40%";
        bar1.style.transform = "translate(0, 0rem) rotate(0deg)";
        bar2.style.opacity = "1";
        bar3.style.transform = "translate(0, -0rem) rotate(0deg)";
    }
}

const logo = (logo) =>{
    document.querySelector('#menu').style.filter = `blur(0)`;
    document.querySelector('#nav-bar').style.filter = `blur(0)`;
    document.querySelector('section').style.filter = `blur(0)`;
    logo.style.width = `7rem`;
    logo.style.height= `7rem`;
    logo.style.left = 'auto';
    logo.style.right = `0`;
    logo.style.top = `2.5rem`;
    if(window.innerWidth<600){
        logo.style.width = `10rem`;
        logo.style.height= `10rem`;
        logo.style.right = `-4%`;
        logo.style.top = `4%`;
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
const textList = [
    "Szkolene wycieczki odwiedzając Łódź przewidują na jej zwiedzenie kilka godzin i jest to wykonalne; Na pewno odwiedzimy orientarium by zobaczyć jak Alex i jego ekipa zażywają kąpieli; zobaczymy jak wyglądała praca w łdzkich fabrykach w XIX wieku (tak, zobaczymy pracujące maszyny), odwiedzimy piotrkowską i Manufakturę.. a co jeszcze to zaleźy od czasu i waszeg programu do którego się dostosuję. Nieważne czy przyjeżdzacie pociągiem czy autokarem, na pewno zdążycie zobaczyć to co chcecie. A jeżeli będziecie chcieli wzbogacić pobyt w Łodzi o grę miejską, mam przygotowany niejeden scenariusz...",
    "Spacer poprzez najbardziej znaną dzielnicę Łodzi, swego czasu największą wieś w Europie. Miejsce gdzie osiedlali się przybywający do Ziemi Obiecanej, szukający lepszego życia....",
    "Przejdziemy Trasą z Parku Staromiejskiego aż do Stacji Radegast; odwiedzimy m.in. ławeczkę Jana Karskiego, pomnik Pękniętego Serca i Cmentarz Żydowski.",
    "Księży Młyn czyli miasto w mieście, z najstarszym parkiem w Łodzi; Muzeum Kinematografii w Pałacu rodziny Scheiblerów - czeka tu na nas Bonifacy&Filemon, Fotoplastikon (tak, ten który pilnie chciał sprzedać Duńczyk) oraz talerz z Kingsajz`a; będziemy podziwiać największy budynek przemysłowy w Polsce w XIX w. i jedyne w swoim rodzaju osiedle robotnicze z muzeum swojego imienia oraz Muzeum Lalki",
    "Przejdziemy królową polskich ulic, najdłuższym deptakiem (zmieżone !) w Polsce; dotkniemy nosów kilku znanych Łodzian zaklętych w pomniki - pokaże wam też swój mały pomnik; rzucimy okiem na kilka kamienic ikonicznych łódzkich kamienic; odwidzimy Aleję Gwiazd polskiej kinematografii; a co jeszcze skrywa ta ulica i jej podwórka dowiecie się w trakcje spaceru.",
    "Ta propozycja to podróż przez Łódź dla najwytrwalszych turystów; jeżeli poświęcicie na to 10-12 godzin to zdążymy zobaczyć wszystko co powyżej, zaopatrzcie się tylko w wygodne buty i dobry nastrój; wycieczka możliwa zarówno waszym transportem, komunikacją miejską, rowerami lub moim automobilem :-)"
];
const pop = (e) =>{
    const popup = document.querySelector(".popup");
    //indexOf e
    const childrenArray = Array.from(e.parentElement.children);
    const index = childrenArray.indexOf(e);
    if(!popFlag){
        popup.style.transform = "translate(-50%, -50%) scale(1)";
        popup.children[0].src = e.children[0].src;
        popup.children[1].innerText = textList[index];
    }
    
    popFlag = true;
}

const closePop = (object) =>{
    object.parentElement.style.transform = "translate(-50%, -50%) scale(0)";
    popFlag = false;
}





// THIS CODE WAS 100% MADE BY KRZYSZTOF KUBIAK, HERE'S HIS INSTAGRAM:
// https://www.instagram.com/no_one_importannt?igsh=MWdnbjZ3ajU2a3pnMg==


//Galeria
let popup = false;
const popupPic = document.getElementById("popupPic");
const klik = (e) => {
    const zdjecie = e.firstChild;
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


const kinematografia = ()=>{
    window.open("https://muzeumkinematografii.pl/", "_blank");
}
const orientarium = ()=>{
    window.open("https://orientarium.lodz.pl/", "_blank");
}
const nckf = ()=>{
    window.open("https://nckf.pl/", "_blank");
}
const pttk = ()=>{
    window.open("https://www.pttk.pl/", "_blank");
}
