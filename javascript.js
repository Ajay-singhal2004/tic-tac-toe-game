let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcon=document.querySelector(".msgcon");
let msg=document.querySelector("#msg");
turnO=true;
//win pattern
let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// //enable box function
const enablebox=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText=""
        turnO=true;
        msgcon.classList.add("hide")
    })
}
//box disable function
const disablebox=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })    
}
//add click for btn and condition
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.classList.add("blue")
        }
        else{
            box.innerText="X";
            turnO=true;
            box.classList.remove("blue")
        }
        box.disabled=true;
        checkwinner();
    })
})
//check winner function
const checkwinner=()=>{
    for(let pattern of winpatterns ){
        console.log(pattern[0],pattern[1],pattern[2])
        let val1=boxes[pattern[0]].innerText
        let val2=boxes[pattern[1]].innerText
        let val3=boxes[pattern[2]].innerText
        if(val1!=""&& val2!=""&&val3!=""){
            if(val1===val2&&val2===val3){
                console.log("winner",val1)
                disablebox();
                msgcon.classList.remove("hide")
                msg.innerText=`congratulations!the winner is ${val1}`
                
            }
        }
    }
}
resetbtn.addEventListener("click",enablebox);
newgamebtn.addEventListener("click",enablebox)