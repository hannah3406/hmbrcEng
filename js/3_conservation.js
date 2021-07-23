//pop-1 관련법안 상세보기

   //열기
btnPopup1.addEventListener('click',function(){
    elPopup1.classList.add('open1');
})

   //닫기
elPopup1.addEventListener('click',function(){
    if(event.target.nodeName =='A'){
        elPopup1.classList.remove('open1');}
})


//화살표 누르면 이미지가 옆으로 이동하게 만들기
const elBtnGo = document.querySelectorAll('.ar3-1 a');
const elUl = document.querySelector('.sub3_41 ul');
const elImage = document.querySelector('.sub3_41 ul li');
let s = 0;

for(let i=0;i<elBtnGo.length;i++){
elBtnGo[i].addEventListener('click',function(){
    if(i==1){
        if(s>-6){s--;}
    }else{
        if(s<0){s++;}
    }
    let x1 = (elImage.offsetWidth + 20) * s;
    elUl.style = `transform:translateX(${x1}px)`;
});
};

//팝업창 열리게
const popUpAll = document.querySelectorAll('.popUpAll')
const btnPopup = document.querySelectorAll('.btnPopup')
for(let i=0;i<7;i++){
    //pop-2
       //열기
        btnPopup[i].addEventListener('click',function(){
        popUpAll[i].classList.add('open');
    })
    
       //닫기
    popUpAll[i].addEventListener('click',function(){
        if(event.target.nodeName =='A'){
            this.classList.remove('open');}
    })
    }

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


//matchMedia
