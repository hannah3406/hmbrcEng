//scroll event

//스크롤 내리면 이미지와 글 양쪽에서 슬라이드
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

//tab 기능
const elTabBtn = document.querySelectorAll('.sub4_31 a');
const elTabCon = document.querySelectorAll('.tabBox');
let k = 0;

    for(let i=0;i<elTabBtn.length;i++){            
        elTabBtn[i].addEventListener('click',function(){
            elTabBtn[k].classList.remove('active');
            elTabCon[k].classList.remove('active');

            elTabBtn[i].classList.add('active');
            elTabCon[i].classList.add('active');
            k = i;
        });
    }