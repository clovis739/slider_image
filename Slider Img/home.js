let nextDom = document.getElementById("next");
let  prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeout;
let runAutoRun  = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext);
function showSlider(type){
    let itemSlider = document.querySelector(".carousel .list .item");
    let itemThumbnail = document.querySelector(".carousel .thumbnail .item");

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[1]);
        itemThumbnail.appendChild(itemThumbnail[1]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        itemThumbnail.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    }, timeAutoNext);
}