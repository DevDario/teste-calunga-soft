const likeButton = document.getElementsByClassName("item-card-like")

for(let c = 0; c < likeButton.length; c++){
    likeButton[c].addEventListener('click',(e)=>{
    e.preventDefault()

    if(likeButton[c].getAttribute("src")==="./image/like-outlined.png"){
        
    likeButton[c].setAttribute("src","./image/like-filled.png")
    }else{
        
    likeButton[c].setAttribute("src","./image/like-outlined.png")
    }
})
}