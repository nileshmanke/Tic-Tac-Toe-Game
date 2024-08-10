let boxes=document.querySelectorAll(".box");

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




const checkwinner=()=>{

    winpatterns.forEach((patter)=>{

        // console.log(patter[0],patter[1],patter[2]);
        // console.log(boxes[patter[0]],boxes[patter[1]],boxes[patter[2]]);

        val1=boxes[patter[0]];
        val2=boxes[patter[1]];
        val3=boxes[patter[2]];

        if(val1 != "" && val2 != "" && val3 != "" ){
            if(val1 == val2 && val2 == val3){

                console.log("winner  is ", val1.innertext);
            }
        }

    })
}
