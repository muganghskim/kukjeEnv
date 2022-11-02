
//배열에 객체 이용 변수 선언
let countValue = [
    {
        plus:5,
        tag:".box1 .count",
        complete:1391,
        loop:10,
        tagBox:".box1"
    },
    {
        plus:5,
        tag:".box2 .count",
        complete:445,
        loop:40,
        tagBox:".box2"
    },
    {
        plus:5,
        tag:".box3 .count",
        complete:133,
        loop:100,
        tagBox:".box3"
    },
    {
        plus:5,
        tag:".box4 .count",
        complete:775,
        loop:20,
        tagBox:".box4"
    },
    {
        plus:5,
        tag:".box5 .count",
        complete:555,
        loop:40,
        tagBox:".box5"
    }
];

let cont5Start = document.querySelector(".cont4").offsetTop;
console.log(cont5Start);
let test = true
window.addEventListener("scroll",function(){
    let scTop = window.scrollY;
    if(scTop >= cont5Start){
        if(test == true){
            countValue.forEach(function(el){
                setCount(el.plus,el.tag,el.complete,el.loop);
            });
        }
    }
});

//배열 반복문을 이용하여 함수 호출

//함수 정의
function setCount(inc,sel,com,speed){//매개변수
    test = false;
    let num = 0;
    let autoCount = setInterval(function(){
        num += inc;
        //조건문으로 자동실행 멈춤
        if(num >= com){
            clearInterval(autoCount);
            document.querySelector(sel).innerHTML = com;//마지막 도달값 넣어줌
        }
        else{
            document.querySelector(sel).innerHTML = num;//자동실행중 변화값 넣어줌
        }
    },speed);
}