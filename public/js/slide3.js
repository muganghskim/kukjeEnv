let slider = document.querySelector(".view");
    let circleBtn = document.querySelectorAll(".ppBtn");
    // 슬라이드 번호 순서값
    let sNumber = 0;
    slider.style.width = 100 * circleBtn.length + "%";
    // 동그라미 버튼들 각각 클릭시 해당 슬라이드 화면으로 넘어감
    for(let j = 0; j < circleBtn.length; j++){
        circleBtn[j].addEventListener("click",function(){
            // 동그라미 버튼전원 비활성화
            for(let k = 0; k < circleBtn.length; k++){
                circleBtn[k].style.border = "none"
                circleBtn[k].style.backgroundColor = "#777";
            }
            circleBtn[j].style.backgroundColor = "#610509";
            // 화면 넘어가게 처리
            sNumber = j; // 클릭한 동그라미 순서값 sNumber에 대입!
            slider.style.marginLeft = -100 * sNumber + "%";
        });
    }