let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
];




let turnx=true;

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnx){
            box.innerHTML="x";
            turnx=false;
            
        }
        else{
            box.innerHTML="0"
            turnx=true;
        }

        box.disabled=true;
        checkwinner();
    })
})

const reset=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        showwinner.innerHTML="";
         msg.classList.add("hide");
         turnx=true;

    })

}


const newgame=()=>{

    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        showwinner.innerHTML="";
         msg.classList.add("hide");
         turnx=true;

    })

}


const checkwinner=()=>{



    for( let patter of winpatterns){

        let val1=boxes[patter[0]].innerText;
     let val2=boxes[patter[1]].innerText;
 let val3=boxes[patter[2]].innerText;


 if(val1 != "" && val2 != "" && val3 != "" ){
            if(val1 == val2 && val2 == val3){

                console.log("winner  is ", val1);
                showwinner.innerHTML=val1;
                msg.classList.remove("hide");
                boxes.forEach((box)=>{
                    box.disabled=true;

                })
                
                
             }
         }

    }

}
