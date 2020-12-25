const donclick= () => {
const mob=document.querySelector('.mobile');
const nav=document.querySelector('.linkbar')
const linkbar=document.querySelectorAll('.linkbar li');
mob.addEventListener('click',()=>{
    nav.classList.toggle('nav-onclick')
    linkbar.forEach((link,index)=> {
        if(link.style.animation){
            link.style.animation='';
        }
        else{
        link.style.animation=`fade 1s ease forwards ${index/7}s`;
        }
    });     
    mob.classList.toggle('rot')
    
});   
nav.addEventListener('onload',()=>{
    linkbar.classList.toggle('fade 1s ease forwards')
})

}
donclick();
function load(){
    loader.style.display='none'
}
