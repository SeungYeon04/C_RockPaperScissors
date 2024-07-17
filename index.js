let img = document.getElementById("img"); 
let scissors = document.getElementById("scissors"); 
let rock = document.getElementById("rock"); 
let paper =document.getElementById("paper"); 
let user_score = document.getElementById("user_score"); 
let computer_score = document.getElementById("computer_score"); 
let reset_btn = document.getElementById("reset_btn"); 
let end_btn = document.getElementById("end_btn") ;


let imgArray = new Array (); 
imgArray[0] = "paper.png"; 
imgArray[1] = "rock.png"; 
imgArray[2] = "scissors.png"; 


let a; 
let userscore = 0; 
let computeerscore = 0; 

function imagetime() {
    // = Math.random() 0~1 미만의 부동소수점 난수를 생성 
    // 여기서 곱하기 3 
    // floor는 내린다는 뜻 소수점 버리고 가까운 정수형으로 만듦 
    // 0, 1, 2 중 하나 나옴 
    a = Math.floor(Math.random() * 3); 
    img.src = imgArray[a]; 
}

setInterval(imagetime, 90); 

//가위를 클릭했을 때 
scissors.onclick = () => {
    clearInterval(); //사진멈추기 
    if(a == 0)
    {
        //컴퓨터가 보를 낸 경우
        userVictory(); 
    }
    else if(a == 2)
    {
        tie(); 
    } 
    else if(a == 1)
        {
            computerVictory(); 
        } 
}

//바위를 클릭했을 때 
rock.onclick = () => {
    clearInterval(); 
    if(a == 0)
    {
        //컴퓨터가 보를 낸 경우
        computerVictory(); 
    }
    else if(a == 2)
    {
        //컴퓨터가 가위를 낸 경우 
        userVictory(); 
    } 
    else if(a == 1)
    {
        //컴퓨터가 바위를 낸 경우
        tie(); 
    } 
}

//보를 클릭했을 때 
paper.onclick = () => {
    clearInterval(); 
    if(a == 0)
    {
        //컴퓨터가 보를 낸 경우
        tie(); 
    }
    else if(a == 2)
    {
        //컴퓨터가 가위를 낸 경우 
        computerVictory(); 
    
    } 
    else if(a == 1)
    {
        //컴퓨터가 바위를 낸 경우
        userVictory();
    } 
}

reset_btn.onclick = () => {

    let check = confirm("다시 시작하시겠습니까?"); 

    if(check) location.reload(); 

}

function userVictory() {
    alert("승리"); 
    userscore++; 
    user_score.textContent = userscore ; 
}

function computerVictory() {
    alert("패배"); 
    computeerscore++; 
    computer_score.textContent = computeerscore ; 
}

function tie() {
    alert("무승부"); 
}