let scro=document.querySelector(".scroll");
onscroll=function esra(){
  if(scrollY >= 300) {
      scro.style.cssText="display: block;"  
  }
  else{
      scro.style.cssText="display: none;"   
}
}
scro.onclick=function esra(){
      scrollTo(0,0)
}

// scro.onclick=function e (){
// }
