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