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

// let cardIco=document.querySelectorAll('.shop-ico')
// let card=document.querySelectorAll('.card')
// let cardClose=document.querySelectorAll('.close-card')
// let body=document.querySelectorAll('body')


//    // cardIco[0].onclick=function(){
//    //    card[0].classList.add('active')
//    //    body[0].classList.add('active')
//    // }
//    // cardClose[0].onclick=function(){
//    //    card[0].classList.remove('active')
//    //    body[0].classList.remove('active')
//    // }




// let cardIcoFirst=document.querySelectorAll('.shop-ico-1')



//    cardIcoFirst[0].onclick=function(){
//       card[0].classList.add('active')
//       body[0].classList.add('active')
//    }
//    cardClose[0].onclick=function(){
//       card[0].classList.remove('active')
//       body[0].classList.remove('active')
//    }



let searchIco=document.querySelectorAll('.search-ico')
let searchInput=document.querySelectorAll('.search-input')
for(let i=0;i<searchIco.length;i++){
   searchIco[i].onclick=function(){
      searchInput[i].classList.toggle('active')
   }
}

let sizeBox=document.querySelectorAll('.size-box')

for(let i=0;i<sizeBox.length;i++){
   sizeBox[i].onclick=function(){
      sizeBox[i].classList.toggle('active')
   }
}


function showPassword() {
   var x = document.getElementById("password");
   var y=document.getElementById("confirm-password");
   if (x.type === "password") {
     x.type = "text";
     y.type ='text';
   } else {
     x.type = "password";
     y.type = "password";
   }
 }

let minus=document.querySelector('.minus')
let plus=document.querySelector('.plus')
let count=document.querySelector('.count')
console.log(minus,plus,count)
minus.onclick=function(){
   
   if(count.innerText>0){
      count.innerText=Number(count.innerText) -1;
   }
}
plus.onclick=function(){
   count.innerText=Number(count.innerText) +1;
}