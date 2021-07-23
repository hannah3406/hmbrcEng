//inc.html
$(function(){
	$('header').load('en_inc.html header > .head',head);
	$('footer').load('en_inc.html footer > .footer',footer);
});

// toggle
function head(){
	const elBurgur = document.querySelector('.menu-trigger');
	const elBg = document.querySelector('.menu_bg');
	const elBox = document.querySelector('.menu_box');
	const elBackgroundMenu = document.querySelector('.background-menu');

		elBurgur.addEventListener('click',function(){
			this.classList.toggle('active-7');
			elBg.classList.toggle('active');
			elBox.classList.toggle('active1');
			elBackgroundMenu.classList.toggle('active2');
	});


//top버튼
const elTop = document.querySelector('.top');

window.addEventListener('scroll',function(){

	if(window.innerHeight < window.scrollY){
		elTop.classList.add('active');
	}else{
		elTop.classList.remove('active');
	}
});

}


//footer Language버튼
function footer(){
	const selLag = document.querySelector('.language-1');
	const elLag = document.querySelector('.language-1 ul');
	selLag.addEventListener('click',function(){
		elLag.classList.toggle('active');

	});



//footer Family Sites버튼
const selFm = document.querySelector('.familysites-1');
const elFm = document.querySelector('.familysites-1 ul');

selFm.addEventListener('click',function(){
	elFm.classList.toggle('active');
});
}
