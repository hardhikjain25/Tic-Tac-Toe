let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('.reset');
let newbt=document.querySelector('#new-btn');
let msgCont=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turnO=true;  //Player X or Player O
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let count=0;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box was clicked');
        if(turnO)
        {
            turnO=false;
            box.innerText='O';
        }
        else
        {
            turnO=true;
            box.innerText='X'
        }
        count++;
        //disable the button after the click
        box.disabled=true;
        checkWinner(count);
    })
})

//      Wrong way to describe
// boxes.addEventListener('click',()=>{
//         console.log('box was clicked');
//     })
const resetGame=()=>{
    turnO=true;
    enaableBoxes();
    count=0;
    msgCont.classList.add('hide');
}
reset.addEventListener('click',resetGame);
newbt.addEventListener('click',resetGame);
const checkWinner=(count)=>{
    let patCount=0;
    for(let pattern of winPatterns)
    {
        patCount++;
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1===pos2&&pos2===pos3)
            {
                console.log('Winner',pos1);
                showWinner(pos1);
                return;
            } 
        }
        
    }
    if(count==9)
    {
        msg.innerText=`Game Ties`;
        msgCont.classList.remove('hide');
    }
}

const enaableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
        disableBoxes();
        if(winner=='O')
            msg.innerText=`Congratulations Winner is Player 1(${winner})`;
        else
            msg.innerText=`Congratulations Winner is Player 2(${winner})`;
        msgCont.classList.remove('hide');
}