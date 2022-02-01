const progress = document.querySelector('.video-progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

const progress1 = document.querySelector('.video-volume');
  
progress1.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})




function initComparisons() {
  var x, i;

  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }

  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = (w / 2) + "px";
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    img.parentElement.insertBefore(slider, img);
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }

    function slideMove(e) {
      var pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e)
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }

    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

initComparisons();


const pictureInnerContainerColumn1 = document.querySelector('.picture-inner-container-column1')
const pictureInnerContainerColumn2 = document.querySelector('.picture-inner-container-column2')
const pictureInnerContainerColumn3 = document.querySelector('.picture-inner-container-column3')

let images = []
for(let i = 1; i < 16; i++){
  images.push(`<img class="picture-inner-container-column-items" src="assets/img/galery/galery${i}.jpg" alt="galery${i}">`)
}

function createGallery(){
  pictureInnerContainerColumn1.innerHTML = ''
  pictureInnerContainerColumn2.innerHTML = ''
  pictureInnerContainerColumn3.innerHTML = ''
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(images)
  for(let i = 0; i < 5; i++){
    pictureInnerContainerColumn1.innerHTML =` ${pictureInnerContainerColumn1.innerHTML} + ${images[i]}`
  }
  for(let i = 5; i < 10; i++){
    pictureInnerContainerColumn2.innerHTML = pictureInnerContainerColumn2.innerHTML + images[i]
  }
  for(let i = 10; i < 15; i++){
    pictureInnerContainerColumn3.innerHTML = pictureInnerContainerColumn3.innerHTML + images[i]
  }
}

createGallery()


const ticketsForm = document.querySelector('.tickets-form')
const body = document.querySelector('.body')
const closeTicketsForm = document.querySelector('.close')
function ShowTicketsForm (){
  ticketsForm.classList.add('tickets-form-active')

}

closeTicketsForm.addEventListener('click', e = () =>{
  
    ticketsForm.classList.remove('tickets-form-active')
    
})

let button = document.querySelector('.burger-menu')
let NavMenu = document.querySelector('.header-nav')
let items = document.querySelectorAll('.header-nav-ul-li')
let cont = document.querySelector('.welcome-conteiner')
let slaid = document.querySelector('.slaider')
let welc = document.querySelector('.welcome')
let welcImg = document.querySelector('.welcome-img-768')

items.forEach(items => items.addEventListener('click', e = () =>{
  if(button.classList.contains('active')){
      button.classList.remove('active')
      NavMenu.classList.remove('active')
      cont.classList.remove('active')
      slaid.classList.remove('active')
      welc.classList.remove('active')
      welcImg.classList.remove('active')
}}))



button.addEventListener('click', e = () =>{
  if(button.classList.contains('active')){
      button.classList.remove('active')
      NavMenu.classList.remove('active')
      cont.classList.remove('active')
      slaid.classList.remove('active')
      welc.classList.remove('active')
      welcImg.classList.remove('active')
      
  }else{
      button.classList.add('active')
      NavMenu.classList.add('active')
      cont.classList.add('active')
      slaid.classList.add('active')
      welc.classList.add('active')
      welcImg.classList.add('active')
      
  }  
})

let welcomArrowLeft = document.querySelector('.slaider-arrows-left')
let welcomArrowRight = document.querySelector('.slaider-arrows-right')
let welcslide1 = document.querySelector('.slidePagination1')
let welcslide2 = document.querySelector('.slidePagination2')
let welcslide3 = document.querySelector('.slidePagination3')
let welcslide4 = document.querySelector('.slidePagination4')
let welcslide5 = document.querySelector('.slidePagination5')
let welcslidesCollections = document.querySelectorAll('.slidePagination')
let sliderText = document.querySelector('.slaider-p')


welcomArrowLeft.addEventListener('click', e = () => {
  if(welcslide1.classList.contains('slidePaginationActive')){
    welcslide1.classList.remove('slidePaginationActive')
    welcslide5.classList.add('slidePaginationActive')
    welc.style = 'background-image: url(assets/img/welcome-slider/5.jpg); transition: 0.5s;'
    sliderText.innerHTML = '05'
  }else{
    if(welcslide5.classList.contains('slidePaginationActive')){
      welcslide5.classList.remove('slidePaginationActive')
      welcslide4.classList.add('slidePaginationActive')
      welc.style = 'background-image: url(assets/img/welcome-slider/4.jpg); transition: 0.5s;'
      sliderText.innerHTML = '04'
    }else{
      if(welcslide4.classList.contains('slidePaginationActive')){
        welcslide4.classList.remove('slidePaginationActive')
        welcslide3.classList.add('slidePaginationActive')
        welc.style = 'background-image: url(assets/img/welcome-slider/3.jpg); transition: 0.5s;'
        sliderText.innerHTML = '03'
      }else{
        if(welcslide3.classList.contains('slidePaginationActive')){
          welcslide3.classList.remove('slidePaginationActive')
          welcslide2.classList.add('slidePaginationActive')
          welc.style = 'background-image: url(assets/img/welcome-slider/2.jpg); transition: 0.5s;'
          sliderText.innerHTML = '02'          
        }else{
          if(welcslide2.classList.contains('slidePaginationActive')){
            welcslide2.classList.remove('slidePaginationActive')
            welcslide1.classList.add('slidePaginationActive')
            welc.style = 'background-image: url(assets/img/welcome-slider/1.jpg); transition: 0.5s;'
            sliderText.innerHTML = '01'
          }
        }
      }
    } 
  }  
})

welcomArrowRight.addEventListener('click', e = () => {
  if(welcslide1.classList.contains('slidePaginationActive')){
    welcslide1.classList.remove('slidePaginationActive')
    welcslide2.classList.add('slidePaginationActive')
    welc.style = 'background-image: url(assets/img/welcome-slider/2.jpg); transition: 0.5s;'
    sliderText.innerHTML = '02'
  }else{
    if(welcslide2.classList.contains('slidePaginationActive')){
      welcslide2.classList.remove('slidePaginationActive')
      welcslide3.classList.add('slidePaginationActive')
      welc.style = 'background-image: url(assets/img/welcome-slider/3.jpg); transition: 0.5s;'
      sliderText.innerHTML = '03'
    }else{
      if(welcslide3.classList.contains('slidePaginationActive')){
        welcslide3.classList.remove('slidePaginationActive')
        welcslide4.classList.add('slidePaginationActive')
        welc.style = 'background-image: url(assets/img/welcome-slider/4.jpg); transition: 0.5s;'
        sliderText.innerHTML = '04'
      }else{
        if(welcslide4.classList.contains('slidePaginationActive')){
          welcslide4.classList.remove('slidePaginationActive')
          welcslide5.classList.add('slidePaginationActive')
          welc.style = 'background-image: url(assets/img/welcome-slider/5.jpg); transition: 0.5s;'
          sliderText.innerHTML = '05'          
        }else{
          if(welcslide5.classList.contains('slidePaginationActive')){
            welcslide5.classList.remove('slidePaginationActive')
            welcslide1.classList.add('slidePaginationActive')
            welc.style = 'background-image: url(assets/img/welcome-slider/1.jpg); transition: 0.5s;'
            sliderText.innerHTML = '01'
          }
        }
      }
    } 
  }  
})

welcslide1.addEventListener('click', e = ()=>{
  welcslidesCollections.forEach(item => item.classList.remove('slidePaginationActive'))
  welcslide1.classList.add('slidePaginationActive')
  welc.style = 'background-image: url(assets/img/welcome-slider/1.jpg); transition: 0.5s;'
  sliderText.innerHTML = '01'
})
welcslide2.addEventListener('click', e = ()=>{
  welcslidesCollections.forEach(item => item.classList.remove('slidePaginationActive'))
  welcslide2.classList.add('slidePaginationActive')
  welc.style = 'background-image: url(assets/img/welcome-slider/2.jpg); transition: 0.5s;'
  sliderText.innerHTML = '02'
})
welcslide3.addEventListener('click', e = ()=>{
  welcslidesCollections.forEach(item => item.classList.remove('slidePaginationActive'))
  welcslide3.classList.add('slidePaginationActive')
  welc.style = 'background-image: url(assets/img/welcome-slider/3.jpg); transition: 0.5s;'
  sliderText.innerHTML = '03'
})
welcslide4.addEventListener('click', e = ()=>{
  welcslidesCollections.forEach(item => item.classList.remove('slidePaginationActive'))
  welcslide4.classList.add('slidePaginationActive')
  welc.style = 'background-image: url(assets/img/welcome-slider/4.jpg); transition: 0.5s;'
  sliderText.innerHTML = '04'
})
welcslide5.addEventListener('click', e = ()=>{
  welcslidesCollections.forEach(item => item.classList.remove('slidePaginationActive'))
  welcslide5.classList.add('slidePaginationActive')
  welc.style = 'background-image: url(assets/img/welcome-slider/5.jpg); transition: 0.5s;'
  sliderText.innerHTML = '05'
})


let videoSlaiderLeft = document.querySelector('.video-slaider-left')
let videoSlaiderRight = document.querySelector('.video-slaider-right')
let videoSlaiderItems1 = document.querySelector('.video-slaider-items1')
let videoSlaiderItems2 = document.querySelector('.video-slaider-items2')
let videoSlaiderItems3 = document.querySelector('.video-slaider-items3')
let videoSlaiderItems4 = document.querySelector('.video-slaider-items4')
let videoSlaiderItems5 = document.querySelector('.video-slaider-items5')
let videoSlaiderCollection = document.querySelectorAll('.video-slaider-items')
let MainVideo = document.querySelector('.video-frame')
let videoPlaylistItems1 = document.querySelector('.video-playlist-items1')
let videoPlaylistItems2 = document.querySelector('.video-playlist-items2')
let videoPlaylistItems3 = document.querySelector('.video-playlist-items3')
let video1 = '<iframe width="454" height="254" src="https://www.youtube.com/embed/zp1BXPX8jcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" class = "youtubeVid" allowfullscreen></iframe>'
let video2 = '<iframe width="454" height="254" src="https://www.youtube.com/embed/Vi5D6FKhRmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" class = "youtubeVid" allowfullscreen></iframe>'
let video3 = '<iframe width="454" height="254" src="https://www.youtube.com/embed/NOhDysLnTvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" class = "youtubeVid" allowfullscreen></iframe>'
let video4 = '<iframe width="454" height="254" src="https://www.youtube.com/embed/aWmJ5DgyWPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" class = "youtubeVid" allowfullscreen></iframe>'
let video5 = '<iframe width="454" height="254" src="https://www.youtube.com/embed/2OR0OCr6uRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" class = "youtubeVid" allowfullscreen></iframe>'
let youtubeVid = document.querySelector('.youtubeVid1')

videoSlaiderLeft.addEventListener('click', e = () =>{
  if(videoSlaiderItems1.classList.contains('video-slaider-items-active')){
    videoSlaiderItems1.classList.remove('video-slaider-items-active')
    videoSlaiderItems5.classList.add('video-slaider-items-active')
    videoPlaylistItems1.innerHTML = video2
    videoPlaylistItems2.innerHTML = video3
    videoPlaylistItems3.innerHTML = video4
    MainVideo.src = 'assets/video/video4.mp4'
    MainVideo.poster = 'assets/video/poster4.jpg'
    

    }else{
    if(videoSlaiderItems5.classList.contains('video-slaider-items-active')){
      videoSlaiderItems5.classList.remove('video-slaider-items-active')
    videoSlaiderItems4.classList.add('video-slaider-items-active')
    videoPlaylistItems1.innerHTML = video3
    videoPlaylistItems2.innerHTML = video4
    videoPlaylistItems3.innerHTML = video5
    MainVideo.src = 'assets/video/video3.mp4'
    MainVideo.poster = 'assets/video/poster3.jpg'
    }else{
      if(videoSlaiderItems4.classList.contains('video-slaider-items-active')){
        videoSlaiderItems4.classList.remove('video-slaider-items-active')
    videoSlaiderItems3.classList.add('video-slaider-items-active')
    videoPlaylistItems1.innerHTML = video4
    videoPlaylistItems2.innerHTML = video5
    videoPlaylistItems3.innerHTML = video1
    MainVideo.src = 'assets/video/video2.mp4'
    MainVideo.poster = 'assets/video/poster2.jpg'
      }else{
        if(videoSlaiderItems3.classList.contains('video-slaider-items-active')){
          videoSlaiderItems3.classList.remove('video-slaider-items-active')
          videoSlaiderItems2.classList.add('video-slaider-items-active')
          videoPlaylistItems1.innerHTML = video5
          videoPlaylistItems2.innerHTML = video1
          videoPlaylistItems3.innerHTML = video2
          MainVideo.src = 'assets/video/video1.mp4'
          MainVideo.poster = 'assets/video/poster1.jpg'        
        }else{
          if(videoSlaiderItems2.classList.contains('video-slaider-items-active')){
            videoSlaiderItems2.classList.remove('video-slaider-items-active')
            videoSlaiderItems1.classList.add('video-slaider-items-active')
            videoPlaylistItems1.innerHTML = video1
            videoPlaylistItems2.innerHTML = video2
            videoPlaylistItems3.innerHTML = video3
            MainVideo.src = 'assets/video/video0.mp4'
            MainVideo.poster = 'assets/video/poster0.jpg'  
          }
        }
      }
    } 
  }
})

videoSlaiderRight.addEventListener('click', e = () =>{
  if(videoSlaiderItems1.classList.contains('video-slaider-items-active')){
    videoSlaiderItems1.classList.remove('video-slaider-items-active')
    videoSlaiderItems2.classList.add('video-slaider-items-active')
    videoPlaylistItems1.innerHTML = video5
    videoPlaylistItems2.innerHTML = video1
    videoPlaylistItems3.innerHTML = video2
    MainVideo.src = 'assets/video/video1.mp4'
    MainVideo.poster = 'assets/video/poster1.jpg'  
    }else{
    if(videoSlaiderItems2.classList.contains('video-slaider-items-active')){
      videoSlaiderItems2.classList.remove('video-slaider-items-active')
    videoSlaiderItems3.classList.add('video-slaider-items-active')
    videoPlaylistItems1.innerHTML = video4
    videoPlaylistItems2.innerHTML = video5
    videoPlaylistItems3.innerHTML = video1
    MainVideo.src = 'assets/video/video2.mp4'
    MainVideo.poster = 'assets/video/poster2.jpg'
    }else{
      if(videoSlaiderItems3.classList.contains('video-slaider-items-active')){
        videoSlaiderItems3.classList.remove('video-slaider-items-active')
    videoSlaiderItems4.classList.add('video-slaider-items-active')
    videoPlaylistItems1.innerHTML = video3
    videoPlaylistItems2.innerHTML = video4
    videoPlaylistItems3.innerHTML = video5
    MainVideo.src = 'assets/video/video3.mp4'
    MainVideo.poster = 'assets/video/poster3.jpg'
      }else{
        if(videoSlaiderItems4.classList.contains('video-slaider-items-active')){
          videoSlaiderItems4.classList.remove('video-slaider-items-active')
          videoSlaiderItems5.classList.add('video-slaider-items-active')
          videoPlaylistItems1.innerHTML = video2
          videoPlaylistItems2.innerHTML = video3
          videoPlaylistItems3.innerHTML = video4
          MainVideo.src = 'assets/video/video4.mp4'
          MainVideo.poster = 'assets/video/poster4.jpg'        
        }else{
          if(videoSlaiderItems5.classList.contains('video-slaider-items-active')){
            videoSlaiderItems5.classList.remove('video-slaider-items-active')
            videoSlaiderItems1.classList.add('video-slaider-items-active')
            videoPlaylistItems1.innerHTML = video1
            videoPlaylistItems2.innerHTML = video2
            videoPlaylistItems3.innerHTML = video3
            MainVideo.src = 'assets/video/video0.mp4'
            MainVideo.poster = 'assets/video/poster0.jpg'  
          }
        }
      }
    } 
  }
})

videoSlaiderItems1.addEventListener('click', e = ()=>{
  videoSlaiderCollection.forEach(item => item.classList.remove('video-slaider-items-active'))
  videoSlaiderItems1.classList.add('video-slaider-items-active')
  videoPlaylistItems1.innerHTML = video1
  videoPlaylistItems2.innerHTML = video2
  videoPlaylistItems3.innerHTML = video3
  MainVideo.src = 'assets/video/video0.mp4'
  MainVideo.poster = 'assets/video/poster0.jpg'
})

videoSlaiderItems2.addEventListener('click', e = ()=>{
  videoSlaiderCollection.forEach(item => item.classList.remove('video-slaider-items-active'))
  videoSlaiderItems2.classList.add('video-slaider-items-active')
  videoPlaylistItems1.innerHTML = video2
  videoPlaylistItems2.innerHTML = video3
  videoPlaylistItems3.innerHTML = video4
  MainVideo.src = 'assets/video/video1.mp4'
  MainVideo.poster = 'assets/video/poster1.jpg'
})

videoSlaiderItems3.addEventListener('click', e = ()=>{
  videoSlaiderCollection.forEach(item => item.classList.remove('video-slaider-items-active'))
  videoSlaiderItems3.classList.add('video-slaider-items-active')
  videoPlaylistItems1.innerHTML = video3
  videoPlaylistItems2.innerHTML = video4
  videoPlaylistItems3.innerHTML = video5
  MainVideo.src = 'assets/video/video2.mp4'
  MainVideo.poster = 'assets/video/poster2.jpg'
})

videoSlaiderItems4.addEventListener('click', e = ()=>{
  videoSlaiderCollection.forEach(item => item.classList.remove('video-slaider-items-active'))
  videoSlaiderItems4.classList.add('video-slaider-items-active')
  videoPlaylistItems1.innerHTML = video4
  videoPlaylistItems2.innerHTML = video5
  videoPlaylistItems3.innerHTML = video1
  MainVideo.src = 'assets/video/video3.mp4'
  MainVideo.poster = 'assets/video/poster3.jpg'
})

videoSlaiderItems5.addEventListener('click', e = ()=>{
  videoSlaiderCollection.forEach(item => item.classList.remove('video-slaider-items-active'))
  videoSlaiderItems5.classList.add('video-slaider-items-active')
  videoPlaylistItems1.innerHTML = video5
  videoPlaylistItems2.innerHTML = video1
  videoPlaylistItems3.innerHTML = video2
  MainVideo.src = 'assets/video/video4.mp4'
  MainVideo.poster = 'assets/video/poster4.jpg'
})

let player = document.querySelector('.video-play')
let PlayBig = document.querySelector('.video-button-play')
let PlaySmall = document.querySelector('.video-button-play-small')
let VideoProgress = document.querySelector('.video-progress')
let volume = document.querySelector('.button-volume')
let volumeProgress = document.querySelector('.video-volume')
let videoFull = document.querySelector('.button-fullscrine')

MainVideo.addEventListener('click', e = () =>{
  if (MainVideo.paused) {
    MainVideo.play()
    PlayBig.style = 'z-index: -1'
    PlaySmall.src = 'assets/video/pause.png'
  } else {
    MainVideo.pause()
    PlayBig.style = 'z-index: 5'
    PlaySmall.src = 'assets/svg/button-play-small.svg'
  }
})

PlayBig.addEventListener('click', e = ()=>{
  PlayBig.style = 'z-index: -1'
  MainVideo.play()
  PlaySmall.src = 'assets/video/pause.png'
})

PlaySmall.addEventListener('click', e = () =>{
  if (MainVideo.paused) {
    MainVideo.play()
    PlayBig.style = 'z-index: -1'
    PlaySmall.src = 'assets/video/pause.png'
  } else {
    MainVideo.pause()
    PlayBig.style = 'z-index: 5'
    PlaySmall.src = 'assets/svg/button-play-small.svg'
  }
})

volume.addEventListener('click', e = () =>{
  
  let c = volume.src[volume.src.length-6]+volume.src[volume.src.length-5]
  
  if(c == 'me'){
    volume.src = 'assets/video/mute.png'
    volumeProgress.value = 0
    volumeProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #fff 0%, white 100%)`
    MainVideo.volume = volumeProgress.value/100

  }else{
    volume.src = 'assets/svg/button-volume.svg'
    volumeProgress.value = 50
    volumeProgress.style.background = `linear-gradient(to right, #710707 50%, #710707 50%, #fff 50%, white 100%)`
    MainVideo.volume = volumeProgress.value/100
  }
})

volumeProgress.addEventListener('input', e = () =>{
  
  if(volumeProgress.value == 0){
    volume.src = 'assets/video/mute.png'
  }else{
    volume.src = 'assets/svg/button-volume.svg'
  }
  MainVideo.volume = volumeProgress.value/100
})

MainVideo.ontimeupdate = progressUpdate

function progressUpdate(){
  let d = MainVideo.duration
  let c = MainVideo.currentTime
  let value = c/d*100
  progress.value = value
  progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
  if(progress.value == 100){
    PlayBig.style = 'z-index: 5'
    PlaySmall.src = 'assets/svg/button-play-small.svg'

  }
}

progress.addEventListener('input', e = () =>{
  console.log(progress.value)
  MainVideo.currentTime = MainVideo.duration/100*progress.value
  if(progress.value == 100){
    PlayBig.style = 'z-index: 5'
    PlaySmall.src = 'assets/svg/button-play-small.svg'

  }
})




function fullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.webkitrequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
} 

function cancelFullscreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}

videoFull.addEventListener("click", () =>{   
  
    if(Document.fullScreenEnabled !== "true"){        
      fullScreen(player);
      
    }
    if(Document.fullScreenEnabled !== "false"){
      cancelFullscreen();

    }
});



let galleryCollection = document.querySelectorAll('.picture-inner-container-column-items')

function debaunce(func, wait = 20, immediate = true){
  let timeout;
  return function(){
    let context = this
    let args = arguments
    let later = function(){
      timeout = null;
      if(!immediate) func.apply(context, args);
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if(callNow) func.apply(context, args)
  }
}

function checkSlides(e){
  galleryCollection.forEach(items =>{
    let slideInAt = (window.scrollY + window.innerHeight) - items.height/2
    let imgBottom = items.offsetTop + items.height
    let isHalfShown = slideInAt >items.offsetTop
    let isScrolled = window.scrollY
    if(isHalfShown){
      items.classList.add('active')
    }
    if(isScrolled < 3900){
    console.log(isScrolled)
    items.classList.remove('active')
  }

  })
}

window.addEventListener('scroll', debaunce(checkSlides))

function check()
{
    let inp = document.getElementsByName('radio');
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            return inp[i].value;
        }
    }
}

let inp = document.getElementsByName('radio');

let basic = document.querySelector('.basic')
let senior = document.querySelector('.senior')
let totalPrice = document.querySelector('.total-price-p')
let formBasic = document.querySelector('.form-basic')
let formSenior = document.querySelector('.form-senior')
let formTicketTypeSelect = document.querySelector('.TickTypeSelected')
let formTitleBasic = document.querySelector('.tickets-entry-title-basic')
let formTitleSenior = document.querySelector('.tickets-entry-title-senior')
let formOverTitleType = document.querySelector('.overview-cont-title-type')
let formOverItemNumBas = document.querySelector('.overview-cont-desc-item-num-basic')
let formOverItemNumSen = document.querySelector('.overview-cont-desc-item-num-senior')
let formOverItemTypeBas = document.querySelector('.overview-cont-desc-item-type-basic')
let formOverItemTypeSen = document.querySelector('.overview-cont-desc-item-type-senior')
let formOvetItemPriceBas = document.querySelector('.overview-cont-desc-item-price-basic')
let formOvetItemPriceSen = document.querySelector('.overview-cont-desc-item-price-senior')
let formOverTotalPrice = document.querySelector('.overview-cont-desc-total-price')






inp.forEach( items => items.addEventListener('click', e = () =>{
  let price = 20
  if(check() == 'Permanent exhibition'){
    formTicketTypeSelect.value = 'Permanent exhibition'
    formOverTitleType.innerHTML = 'Permanent exhibition'
    price = 20
  }else{
    if(check() == 'Temporary exhibition'){
      formTicketTypeSelect.value = 'Temporary exhibition'
      formOverTitleType.innerHTML = 'Temporary exhibition'
      price = 25
    }else{
      formTicketTypeSelect.value = 'Combined Admission'
      formOverTitleType.innerHTML = 'Combined Admission'
      price = 40
    }
  }
  let BasicCount = basic.value
  let SeniorCount = senior.value
  formBasic.value = BasicCount
  formSenior.value = SeniorCount
  formOverItemNumBas.innerHTML = BasicCount
  formOverItemNumSen.innerHTML = SeniorCount
  formTitleBasic.innerHTML = `Basic 18+ (${price} €)`
  formTitleSenior.innerHTML = `Senior 65+ (${price/2} €)`
  formOverItemTypeBas.innerHTML = `Basic 18+ (${price} €)`
  formOverItemTypeSen.innerHTML = `Senior 65+ (${price/2} €)`
  formOvetItemPriceBas.innerHTML = price*BasicCount + ' €'
  formOvetItemPriceSen.innerHTML = price/2*SeniorCount + ' €'
  totalPrice.innerHTML = BasicCount * price + SeniorCount*price/2
  formOverTotalPrice.innerHTML = totalPrice.innerHTML + ' €'  
}))

let ticketNumberButtons = document.querySelectorAll('.tickets-number-button')

ticketNumberButtons.forEach(item => item.addEventListener('click', e = () =>{
  let price = 20
  if(check() == 'Permanent exhibition'){
    formTicketTypeSelect.value = 'Permanent exhibition'
    formOverTitleType.innerHTML = 'Permanent exhibition'
    price = 20
  }else{
    if(check() == 'Temporary exhibition'){
      formTicketTypeSelect.value = 'Temporary exhibition'
      formOverTitleType.innerHTML = 'Temporary exhibition'
      price = 25
    }else{
      formTicketTypeSelect.value = 'Combined Admission'
      formOverTitleType.innerHTML = 'Combined Admission'
      price = 40
    }
  }

  let BasicCount = basic.value
  let SeniorCount = senior.value
  formBasic.value = BasicCount
  formSenior.value = SeniorCount
  formOverItemNumBas.innerHTML = BasicCount
  formOverItemNumSen.innerHTML = SeniorCount
  formOverItemTypeBas.innerHTML = `Basic 18+ (${price} €)`
  formOverItemTypeSen.innerHTML = `Senior 65+ (${price/2} €)`
  formOvetItemPriceBas.innerHTML = price*BasicCount + ' €'
  formOvetItemPriceSen.innerHTML = price/2*SeniorCount + ' €'
  totalPrice.innerHTML = BasicCount * price + SeniorCount*price/2
  formOverTotalPrice.innerHTML = totalPrice.innerHTML + ' €'    
}))

formTicketTypeSelect.addEventListener('input', e = () =>{
  let price = 20
  if(formTicketTypeSelect.value == 'Permanent exhibition'){
    for (let i = 0; i < inp.length; i++) {
      if (inp[i].value == "Permanent exhibition" ) {
          inp[i].checked = true;
      }
  }
    
    formOverTitleType.innerHTML = 'Permanent exhibition'
    price = 20
  }else{
    if(formTicketTypeSelect.value == 'Temporary exhibition'){
      for (let i = 0; i < inp.length; i++) {
        if (inp[i].value == "Temporary exhibition" ) {
            inp[i].checked = true;
        }
    }
      
      
      formOverTitleType.innerHTML = 'Temporary exhibition'
      price = 25
    }else{
      
      formOverTitleType.innerHTML = 'Combined Admission'
      for (let i = 0; i < inp.length; i++) {
        if (inp[i].value == "Combined Admission" ) {
            inp[i].checked = true;
        }
    }
      price = 40
    }
  }
  let BasicCount = basic.value
  let SeniorCount = senior.value
  formBasic.value = BasicCount
  formSenior.value = SeniorCount
  formOverItemNumBas.innerHTML = BasicCount
  formOverItemNumSen.innerHTML = SeniorCount
  formTitleBasic.innerHTML = `Basic 18+ (${price} €)`
  formTitleSenior.innerHTML = `Senior 65+ (${price/2} €)`
  formOverItemTypeBas.innerHTML = `Basic 18+ (${price} €)`
  formOverItemTypeSen.innerHTML = `Senior 65+ (${price/2} €)`
  formOvetItemPriceBas.innerHTML = price*BasicCount + ' €'
  formOvetItemPriceSen.innerHTML = price/2*SeniorCount + ' €'
  totalPrice.innerHTML = BasicCount * price + SeniorCount*price/2
  formOverTotalPrice.innerHTML = totalPrice.innerHTML + ' €'  

})

let ticketEntryButtons = document.querySelectorAll('.tickets-entry-button')

ticketEntryButtons.forEach(item => item.addEventListener('click', e = () =>{
  let price = 20
  if(formTicketTypeSelect.value == 'Permanent exhibition'){
    formOverTitleType.innerHTML = 'Permanent exhibition'
    for (let i = 0; i < inp.length; i++) {
      if (inp[i].value == "Permanent exhibition" ) {
          inp[i].checked = true;
      }
  }

    price = 20
  }else{
    if(formTicketTypeSelect.value == 'Temporary exhibition'){
      formOverTitleType.innerHTML = 'Temporary exhibition'
      for (let i = 0; i < inp.length; i++) {
        if (inp[i].value == "Temporary exhibition" ) {
            inp[i].checked = true;
        }
    }

      price = 25
    }else{
      formOverTitleType.innerHTML = 'Combined Admission'
      for (let i = 0; i < inp.length; i++) {
        if (inp[i].value == "Combined Admission" ) {
            inp[i].checked = true;
        }
    }
      price = 40
    }
  }

  let BasicCount = formBasic.value
  let SeniorCount = formSenior.value
  basic.value = BasicCount
  senior.value = SeniorCount
  formOverItemNumBas.innerHTML = BasicCount
  formOverItemNumSen.innerHTML = SeniorCount
  formOverItemTypeBas.innerHTML = `Basic 18+ (${price} €)`
  formOverItemTypeSen.innerHTML = `Senior 65+ (${price/2} €)`
  formOvetItemPriceBas.innerHTML = price*BasicCount + ' €'
  formOvetItemPriceSen.innerHTML = price/2*SeniorCount + ' €'
  totalPrice.innerHTML = BasicCount * price + SeniorCount*price/2
  formOverTotalPrice.innerHTML = totalPrice.innerHTML + ' €'    
}))

let date1 = document.querySelector('.date')
let dateP = document.querySelector('.date-p')
let today = new Date()
date1.addEventListener('input', e = () =>{
  
  
  let x = new Date(date1.value)
  if(today >= x){
    alert('Incorrect date')
    dateP.innerHTML = 'Date'
    console.log(x)
  }else{
    dateP.innerHTML = date1.value
  }
})
