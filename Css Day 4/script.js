const imagetoggle =document.getElementById("toggle")
const firstimage= document.getElementById("im1")
const secondimage= document.getElementById("ravana")

imagetoggle.addEventListener('click',function(){
    if(secondimage.style.opacity === '0'){
        firstimage.style.opacity='0';
        secondimage.style.opacity ='1';
    }else{
        firstimage.style.opacity='1';
        secondimage.style.opacity='0';
    }
});