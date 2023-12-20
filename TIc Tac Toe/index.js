
const gameInfo=document.querySelector(".game-info");
const boxes=document.querySelectorAll(".box");
const newGameBtn=document.querySelector(".btn");


let emptySpace;
const winningPoint=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let currentPlayer;


function initGame(){
    currentPlayer="X";
    emptySpace=["","","","","","","","",""];

    boxes.forEach((box,index)=>{
        box.innerHTML="";
        boxes[index].style.pointerEvents = "all";
        box.classList=`box box${index+1}`;
    })
   newGameBtn.classList.remove('active');
   gameInfo.innerHTML=`Current Player -${currentPlayer}`;

}

initGame();


function winnerPlayer(){
         let answer="";
    winningPoint.forEach((position,index)=>{
        
      

        if((emptySpace[position[0]]!=="" || emptySpace[position[1]]!=="" || emptySpace[position[2]]!=="") &&
        (emptySpace[position[0]]===emptySpace[position[1]] && emptySpace[position[1]]===emptySpace[position[2]])){
            if(emptySpace[position[0]]==="X"){
                answer="X"
            }
            else{
                
                answer="O"   
            }
              //yha ab han jeet gye hai ham to ham sabhi box ko disable kar denge
            boxes.forEach((box) => {
               box.style.pointerEvents = "none";
            })
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            
            
        }

    })

    if(answer!==""){
        gameInfo.innerHTML=`Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }
    // agar koi nhi jeeta tab ham kya karenge
    let fillCount=0;
    emptySpace.forEach((box,index)=>{
        if(box!==""){
            fillCount++;
        }
    })
    if(fillCount===9){
        gameInfo.innerHTML=`Game is tie up`;
        newGameBtn.classList.add('active');
        return;
        
    }
}


function sufflePlayer(currentPlayer){
      if(currentPlayer==="X"){
        currentPlayer="O"
      }
      else{
        currentPlayer="X"
      }

      return currentPlayer;
      
      
      
}

function handleClick(box,index){
    if(emptySpace[index]===""){
        emptySpace[index]=currentPlayer;
        boxes[index].innerHTML=currentPlayer;
        boxes[index].style.pointerEvents="none";

        //now ham current playe hamara dusra hoga
       currentPlayer= sufflePlayer(currentPlayer);
       gameInfo.innerText = `Current Player - ${currentPlayer}`;
        
        //now hame yh bhi check karna ki kahi koi jeet to nhi gya
        winnerPlayer();
    }

}

boxes.forEach((box,index)=>{
    box.addEventListener('click',(e)=>{
         handleClick(box,index);
         
    })
})

newGameBtn.addEventListener('click',(e)=>{
    initGame();
})




