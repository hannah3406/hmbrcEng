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



//json 파일 연결하기
fetch('js/data.json')
    .then((res) =>  res.json())
    .then((data) => callback(data));

    function callback(data){
        //구조치료실 Ul,popup 선택자 잡아주기
        const elUl = document.querySelector('.sub2_41 ul');
        const Popup = document.querySelector('.Popup');
        let msg = '';

        //li 추가하기
        data.items.forEach(function(v,k){
            src = data.items[k].Lisrc
            bName = data.items[k].LibName
            pDetail = data.items[k].LipDetail

            msg += ` <li class="btnPopup">
            <figure><img src="${src}" alt="sub2_4-1"></figure>
            <div class="txt2_2">
                <b>${bName}</b>
                <p>${pDetail} </p>
                <a>바로가기</a>
            </div>
            </li>`;            
        });
        elUl.innerHTML = msg;



        const elLi = document.querySelectorAll('.btnPopup');
        //클릭하면 popup창 열리게
        for(let i=0;i<elLi.length;i++){
            elLi[i].addEventListener('click',function(){
                Popup.classList.add('open');
                 //popup창 안 내용 추가
                    H2txt = data.items[i].H2txt
                    Ptxt = data.items[i].Ptxt

                    msg =` <div class="pop-close">
                                    <div class="pop-21">
                                        <article class="pop-txt1">
                                            <h2>${H2txt}</h2>
                                            <p>${Ptxt}</p>
                                        </article>
                                        <ul>
                                        </ul>
                                    </div>
                                    <a>닫기</a>
                                </div> `
                Popup.innerHTML = msg;
                  //popup창 li 내용 추가
                const popupUl = document.querySelector('.Popup ul');
                let les = data.items[i].popup.length;
                
                for(let k=0;k<les;k++){
                    // let msgpopup = '';
                    src = data.items[i].popup[k].src
                    titA = data.items[i].popup[k].titA
                    pNameA = data.items[i].popup[k].pNameA
                    pPlaceA = data.items[i].popup[k].pPlaceA
                    pDetailA = data.items[i].popup[k].pDetailA
                    titB = data.items[i].popup[k].titB
                    pNameB = data.items[i].popup[k].pNameB
                    pPlaceB = data.items[i].popup[k].pPlaceB
                    pDetailB = data.items[i].popup[k].pDetailB

                    msg = `
                    <li>
                        <figure><img src="${src}" alt=""></figure>
                        <article class="pop-txt2">
                            <h3>${titA}</h3>
                            <p>
                                <b>구조 대상</b> ${pNameA}<br>
                                <b>구조 장소</b> ${pPlaceA}<br>
                                <b>구조 과정</b>${pDetailA}<br>
                            </p><br>
                            <h3>${titB}</h3>
                            <p>
                            <b>구조 대상</b> ${pNameB}<br>
                            <b>구조 장소</b> ${pPlaceB}<br>
                            <b>구조 과정</b>${pDetailB}<br>
                            </p>
                        </article>
                        </li>
                        `
                    popupUl.innerHTML += msg;
                }
            })
        }
        //클릭하면 popup창 닫히게
        Popup.addEventListener('click',function(){
            if(event.target.nodeName =='A'){
            this.classList.remove('open');}
        })
    }