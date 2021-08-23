'use strict'

const modal=document.querySelector('.modal');
const show=document.querySelectorAll('.show-modal');
const crossbtn=document.querySelector('.close-modal');
const bg=document.querySelector('.overlay');


console.log(show);//

for(let i=0;i<show.length;i++)
show[i].addEventListener('click',function(){
    modal.classList.remove('hidden'); // without .hidden
    bg.classList.remove('hidden');
});


const closemodal=function(){
    modal.classList.add('hidden');
    bg.classList.add('hidden');
};

crossbtn.addEventListener('click',closemodal); //worsk same as below code & has not called it as function as by doing this it will not work

bg.addEventListener('click',function(){  
    modal.classList.add('hidden');
     bg.classList.add('hidden');
});

document.addEventListener('keydown', function(x){
    if(x.key=="Escape" && !modal.classList.contains('hidden'))
    {
        modal.classList.add('hidden');
        bg.classList.add('hidden');
    }
});
