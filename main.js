

// NAV BAR (For Test Reviewers, source of code was found on https://www.w3schools.com/howto/howto_js_dropdown.asp and edited very slightly for use in project.) 

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
//   console.log(explosives);}
  


//   window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }

// }



// function myFunction2() {
// ;
//   document.getElementById("myDropdown2").classList.toggle("show"); 
// }


// function myFunction3() {
//   document.getElementById("myDropdown3").classList.toggle("show");
//   }




let explosivesTab = document.getElementById("explosivesTab");
let eContent= document.getElementsByClassName("dropdown-content1")

let testConsole= ()=>{
  console.log('test');
}

let isExplosivesOpen = false;

let openExplosives= ()=>{
  if (!isExplosivesOpen ){
   eContent[0].style.display="block";
   isExplosivesOpen = true;
   console.log('open');
  } else {
    eContent[0].style.display="none";
    isExplosivesOpen = false;
  }
}





let accessoriesTab = document.getElementById("accessoriesTab");
let accContent= document.getElementsByClassName("dropdown-content2");







explosivesTab.addEventListener("click", openExplosives);


let isAccessoriesOpen = false;

let openAccessories= ()=>{
  if (!isAccessoriesOpen ){
   accContent[0].style.display="block";
   isAccessoriesOpen = true;
   console.log('open');
  } else {
    accContent[0].style.display="none";
    isAccessoriesOpen = false;
  }
}





accessoriesTab.addEventListener("click", openAccessories);


let saleTab = document.getElementById("saleTab");
let saleContent = document.getElementsByClassName("dropdown-content3");


let isSaleOpen = false;

let openSale= ()=>{
  if (!isSaleOpen ){
   saleContent[0].style.display="block";
   isSaleOpen = true;
   console.log('open');
  } else {
    saleContent[0].style.display="none";
    isSaleOpen = false;
  }
}


saleTab.addEventListener("click", openSale);



let closeTabs = ()=>{
  let clickedInsideExplosives = explosivesTab.contains(event.target);

  if (!clickedInsideExplosives){
    console.log('clickedoutsidetab');
    eContent[0].style.display="none";
    isExplosivesOpen= false;
  };
  
  let clickedInsideAccessories = accessoriesTab.contains(event.target);

  if(!clickedInsideAccessories){
    console.log('ClickedoutsideAccessories');
    accContent[0].style.display="none";
    isAccessoriesOpen = false;
  }  

  let clickedInsideSale = saleTab.contains(event.target);

  if(!clickedInsideSale){
    console.log('ClickedoutsideSale');
    saleContent[0].style.display="none";
    isSaleOpen = false;
  }  





}

window.addEventListener("click",closeTabs);
















    
//Function I tried to create that would close one nav bar when another one was opened.
//    
//var explosives = document.getElementById("myDropdown");
//
//var accessories = document.getElementById("myDropdown2");
//
//var sale = document.getElementById("myDropdown3");
//
//console.log(explosives, accessories, sale);
//

 
//function closeNavbar (){
//    if (explosives.className == "dropdown-content show" && accessories.className == "dropdown-content show"){
//    return accessories.classList.remove('show');
//    }   
//}




//TIMER For Test Reviewers, source of countdown timer code was found on https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown and edited slightly for use in project.  
function play() {
  var audio = new Audio('sounds/explosion.mp3');
  audio.play();
}


let timeleft = Math.floor((Math.random()*900+100));
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){ 
    play();
    console.log('test'); document.getElementById("countdown").innerHTML= 0;
    clearInterval(downloadTimer);
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);







