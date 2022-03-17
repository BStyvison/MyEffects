//Fullscreen Sticky Header

window.addEventListener("scroll", function(){
    const header = this.document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)

})
const navigation = document.querySelector('nav')
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}

//ScroolBar

window.onresize=function(){
    location.reload();
}
let progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
let progressHeight = (window.pageYOffset / totalHeight) * 100;
progress.style.height = progressHeight + "%";
}


