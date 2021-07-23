


//pop1
//팝업 열리게
popup1.addEventListener('click',function(){
      map1.classList.add('map-11');  
})

//팝업 닫히게
map1.addEventListener('click',function(){
if(
      event.target.classList.contains('close')
){
map1.classList.remove('map-11');}
})



//pop2
//팝업 열리게
popup2.addEventListener('click',function(){
      map2.classList.add('map-22');  
})

//팝업 닫히게
map2.addEventListener('click',function(){
if(
      event.target.classList.contains('close')
){
map2.classList.remove('map-22');}
})

//pop3
//팝업 열리게
popup3.addEventListener('click',function(){
      map3.classList.add('map-33');  
})

//팝업 닫히게
map3.addEventListener('click',function(){
if(
      event.target.classList.contains('close')
){
map3.classList.remove('map-33');}
})


//pop4
//팝업 열리게
popup4.addEventListener('click',function(){
      map4.classList.add('map-44');  
})

//팝업 닫히게
map4.addEventListener('click',function(){
if(
      event.target.classList.contains('close')
){
map4.classList.remove('map-44');}
})

//scroll event

//스크롤 내리면 글 올라오며 등장
window.addEventListener('scroll',function(){
      const elM = document.querySelectorAll('.elM');
      
      for(let i=0;i<elM.length;i++){
              let elHei = elM[i].offsetTop;
              let winHei = window.innerHeight;
              
          if(elHei-winHei <= window.scrollY){
              elM[i].classList.add('active');
          }
      }
  })