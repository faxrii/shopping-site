let openIco=document.querySelectorAll('.open-ico')
let closeIco=document.querySelectorAll('.close-ico')
let menuBar=document.querySelectorAll('.menu-bar')
for(let i=0;i<openIco.length;i++){
   openIco[i].onclick=function(){
    menuBar[i].classList.add('active')
    openIco[i].classList.add('active')
    closeIco[i].classList.add('active')
   }
   closeIco[i].onclick=function(){
    menuBar[i].classList.remove('active')
    openIco[i].classList.remove('active')
    closeIco[i].classList.remove('active')
   }
}

let cardIco=document.querySelectorAll('.shop-ico')
let card=document.querySelectorAll('.card')
let cardClose=document.querySelectorAll('.close-card')
let body=document.querySelectorAll('body')

for(let i=0;i<cardClose.length;i++){
   cardIco[i].onclick=function(){
      card[i].classList.add('active')
      body[i].classList.add('active')
   }
   cardClose[i].onclick=function(){
      card[i].classList.remove('active')
      body[i].classList.remove('active')
   }
}



let cardIcoFirst=document.querySelectorAll('.shop-ico-1')


for(let i=0;i<cardClose.length;i++){
   cardIcoFirst[i].onclick=function(){
      card[i].classList.add('active')
      body[i].classList.add('active')
   }
   cardClose[i].onclick=function(){
      card[i].classList.remove('active')
      body[i].classList.remove('active')
   }
}