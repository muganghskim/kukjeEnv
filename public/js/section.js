const header = document.querySelector("#header");
const logo = document.querySelector(".logoImg");
const move = document.querySelectorAll(".move");
const gnb = document.querySelector(".gnb > li")
const liMove = document.querySelectorAll(".liMove");
const hbgMenu = document.querySelector(".hbgMenu");
const depthWrap2 = document.querySelector(".depthWrap2");
const depthWrap = document.querySelector(".depthWrap");
const depth2 = document.querySelector(".depth2"); 
const depth = document.querySelector(".depth"); 

//드롭 다운 메뉴 등장
depthWrap.addEventListener("mouseenter",function(){
    depth.style.height = "90px";
});
depthWrap.addEventListener("mouseleave",function(){
    depth.style.height = "0px";
});

//hbg드롭 다운 메뉴 등장
depthWrap2.addEventListener("mouseenter",function(){
    depth2.style.height = "60px";
});
depthWrap2.addEventListener("mouseleave",function(){
    depth2.style.height = "0px";
});

let secStart = [];

window.addEventListener("scroll",function(){
    let cont2Start = document.querySelector(".h-bot").offsetTop;
    
    for(let i=0; i<move.length; i++){
        secStart[i] = move[i].offsetTop;
    }
    let scTop = window.scrollY;

    if(scTop >= (cont2Start)){
        header.classList.add("fixed");
        logo.setAttribute("src","/img/logo_w.png");
    }
    else{
        header.classList.remove("fixed");
        logo.setAttribute("src","/img/logo.png");
    }

});

//gnb 클릭시 구역별로 나타내기
scrollTocont(liMove);

function scrollTocont(tag){
    for(let i=0; i<liMove.length; i++){
        tag[i].addEventListener("click",function(e){
        e.preventDefault();
        //해당 섹션구역의 위치값으로 스크롤바가 부드럽게 이동
        let scrollMove = move[i].offsetTop-90;
        window.scrollTo({
            top:scrollMove,
            behavior:"smooth"
        });
    });
    }
}
//햄버거 메뉴
const hbgBtn = document.querySelector(".hbgBtn");
const xBtn = document.querySelector(".xBtn");
const operX = document.querySelector(".operci");

hbgBtn.addEventListener("click",function(){
    hbgMenu.classList.add("on");
});
xBtn.addEventListener("click",function(){
    hbgMenu.classList.remove("on");
});
operX.addEventListener("click",function(){
    hbgMenu.classList.remove("on");
});

