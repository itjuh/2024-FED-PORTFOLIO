
const tg = document.querySelectorAll('.lnb>ol>li');

tg.forEach(ele=>{
    ele.addEventListener('click',()=>{
        tg.forEach(v=>{
            removeOn(v);
        });
        addOn(ele);
    })
});

function addOn(tg){
    tg.classList.add('on');
}

function removeOn(tg){
    tg.classList.remove('on');
}