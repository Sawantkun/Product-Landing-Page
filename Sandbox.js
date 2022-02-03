let icon=document.querySelector('.moon');
icon.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src="./images/sun.png";
    }else{
        icon.src="./images/moon.png";
    }
});



let scroll=document.querySelector('.scroll');
scroll.addEventListener('click',()=>{
    scrollTo(0,0);
});