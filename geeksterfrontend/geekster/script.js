{
  let slides=document.querySelectorAll('.slide-container');
let index=0;
function next(){
    slides[index].classList.remove('active');
    index=(index+1)% slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index=(index-1 + slides.length)% slides.length;
    slides[index].classList.add('active');
}

const boxes = document.querySelectorAll('.sliderindicator');

boxes.forEach(sliderindicator => {
  sliderindicator.addEventListener('click', function onclick(event) {
    console.log('box clicked', event);

    sliderindicator.setAttribute('style', 'slide');
  }); 
});
}

// const slides=document.querySelector(".user").children;
// const indicatorImages=document.querySelector(".slider-indicator").children;

//  for(let i=0; i<indicatorImages.length; i++){
//    indicatorImages[i].addEventListener("click",function(){
      
//         for(let j=0; j<indicatorImages.length; j++){
//           indicatorImages[j].classList.remove("active");
//         }
//          this.classList.add("active");
//          const id=this.getAttribute("data-id");
//         for(let j=0; j<slides.length; j++){
//           slides[j].classList.remove("active");
//         }

//          slides[id].classList.add("active");

//    })
//  }


