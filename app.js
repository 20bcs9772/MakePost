const f1 = document.querySelector("#f1");
const ul1 = document.querySelector("#ul1");
const postz = document.querySelector("#postz");
const themez = document.querySelector('#themez');
const notif = document.querySelector('#notif');
const pHead = document.querySelector('.pps');
const Them = themez.parentElement.parentElement.parentElement.parentElement.parentElement;
let counts =0;
let cScore = 0;
themez.addEventListener('click',function(){
    if(counts==0){
    Them.parentElement.classList.toggle('ptheme');
    Them.classList.toggle('ptheme2');
    counts++;
    }
    else if(counts==1){
    Them.parentElement.classList.toggle('ptheme');
    Them.classList.toggle('ptheme2');
    Them.parentElement.classList.toggle('ytheme');
    Them.classList.toggle('ytheme2');
    counts++;
    }
    else if(counts==2){
    Them.parentElement.classList.toggle('ytheme');
    Them.classList.toggle('ytheme2');
    Them.parentElement.classList.toggle('gtheme');
    Them.classList.toggle('gtheme2');
    counts++;
    }
    else if(counts==3){
    Them.parentElement.classList.toggle('gtheme');
    Them.classList.toggle('gtheme2');
    Them.parentElement.classList.toggle('lighttheme');
    Them.classList.toggle('lighttheme2');
    counts++;
    }
    else if(counts==4){
        Them.parentElement.classList.toggle('lighttheme');
        Them.classList.toggle('lighttheme2');
        Them.parentElement.classList.toggle('darktheme');
        Them.classList.toggle('darktheme2');
        pHead.classList.toggle('darktheme3')
        counts++;
        }
    else if(counts==5){
        Them.parentElement.classList.toggle('darktheme');
        Them.classList.toggle('darktheme2');
        pHead.classList.toggle('darktheme3')
        counts=0;
        }
})
f1.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = f1.elements.name;
    const chat = f1.elements.chat;
    const image = f1.elements.url;
    const color = f1.elements.color;
    upd(name.value,chat.value);
    cScore+=1;
    notif.innerText=cScore;
    makepost(name.value,chat.value,color.value,image.value);
    name.value='';
    chat.value='';
    image.value='';
})
const upd= (name,chat)=>{
    const newLi = document.createElement("li");
    const newChat = document.createElement("p");
    const newBtn = document.createElement("button");
    newLi.className='list-group-item overflow-auto havingfunnn';
    newChat.innerHTML=`<b>${name}</b> posted ${chat}`;
    newBtn.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>';
    newBtn.className='btn btn-danger ';
    newLi.append(newChat);
    newLi.append(newBtn);
    ul1.insertAdjacentElement('afterbegin',newLi);
}
ul1.addEventListener('click', (e)=>{
   if(e.target.nodeName === 'BUTTON'){
       e.target.parentElement.remove();
       cScore-=1;
       notif.innerText=cScore;
   }
})
const makepost=(name,chat,color,image=false)=>{
    // const newCard = document.createElement('div');
    const newPost = document.createElement('div');
    const newBody = document.createElement('div');
    const newTitle = document.createElement('h5');
    const newCon = document.createElement('p');
    const newIcon = document.createElement('p');
    const newH = document.createElement('span');
    const newS = document.createElement('span');
    // newCard.className='col-5 mb-2';
    newPost.style.backgroundColor=color;
    // newPost.className= 'havingfunnn';
    newH.innerHTML='<svg aria-hidden="true" focusable="false" width="20" height="20" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>';
    newS.innerHTML='<svg aria-hidden="true" focusable="false" width="20" height="20" data-prefix="fas" data-icon="bookmark" class="svg-inline--fa fa-bookmark fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path></svg>';
    newPost.className='card border-secondary ';
    newH.addEventListener('click',function(e){
        this.classList.toggle('text-danger');
    })
    newS.addEventListener('click',function(e){
        this.classList.toggle('text-primary');
    })
    if(image){
        const newImage = document.createElement('img');
        newImage.className = "card-img-top mb-1" ;
        newImage.src= image;
        newImage.alt= 'not found';
        newPost.append(newImage);
    }
    // newBody.style.backgroundColor=color;
    newBody.className='card-body';
    newTitle.className='card-title user-select-none ponta mt-3';
    newCon.className='card-text';
    newIcon.className='clearfix';
    newH.className='float-left';
    newS.className='float-right';
    newTitle.innerText=name;
    newCon.innerText=chat;
    newIcon.append(newH);
    // newIcon.append("  ");
    newIcon.append(newS);
    newBody.append(newIcon);
    newBody.append(newTitle);
    newBody.append(newCon);
    newPost.append(newBody);
    // newCard.append(newPost);
    postz.insertAdjacentElement('afterbegin',newPost);
}