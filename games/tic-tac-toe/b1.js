let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");

let x=true;
const boxesArray = Array.from(boxes);

boxes.forEach((box) => {

    box.onclick=()=>{

        if(x){
            box.innerText='X';
            x=false;
        }
        else{
            box.innerText='O';
            x=true;
        }

        box.disabled=true;
        if (check() === false) {
            boxes.forEach(b => b.disabled = true);
            return;
        }
        if (checkall() === false) {
            boxes.forEach(b => b.disabled = true);
            return;
        }

}   
});

function check(){

    const matrix = [
        [boxesArray[0].innerText, boxesArray[1].innerText, boxesArray[2].innerText],
        [boxesArray[3].innerText, boxesArray[4].innerText, boxesArray[5].innerText],
        [boxesArray[6].innerText, boxesArray[7].innerText, boxesArray[8].innerText]
    ];

    let countx=0;
    let counto=0;

   for(let i=0;i<3;i){
       for(let j=0;j<3;j++){
        
           if(matrix[i][j]=='X'){
               countx++;
           }
           else if(matrix[i][j]=='O'){
               counto++;
           }
       }
       if(countx==3){
            alert("X wins");
           return false;
       }
       else if(counto==3){
            alert("O wins");
           return false;
       }
       else {
           countx=0;
           counto=0;
           i++;
       }
   }

for(let j=0;j<3;j){
       for(let i=0;i<3;i++){
           if(matrix[i][j]=='X'){
               countx++;
           }
           else if(matrix[i][j]=='O'){
               counto++;
           }
       }
       if(countx==3){
            alert("X wins");
           return false;
       }
       else if(counto==3){
            alert("O wins");
           return false;
       }
       else {
           countx=0;
           counto=0;
           j++;
       }
    }
    
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i==j&&matrix[i][j]=='O'){
                counto++;
            }
            else if(i==j&&matrix[i][j]=='X'){
                countx++;
            }
        }
    }
     if(countx==3){
          alert("X wins");
           return false;
       }
       else if(counto==3){
            alert("O wins");
           return false;
       }
       else {
           countx=0;
           counto=0;
       }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i+j==2&&matrix[i][j]=='O'){
                counto++;
            }
            else if(i+j==2&&matrix[i][j]=='X'){
                countx++;
            }
        }
    }
     if(countx==3){
         alert("X wins");
           return false;
       }
       else if(counto==3){
        alert("O wins");
           return false;
       }
       else {
           countx=0;
           counto=0;
       }
    return true;
    
}

function checkall(){

     const matrix = [
        [boxesArray[0].innerText, boxesArray[1].innerText, boxesArray[2].innerText],
        [boxesArray[3].innerText, boxesArray[4].innerText, boxesArray[5].innerText],
        [boxesArray[6].innerText, boxesArray[7].innerText, boxesArray[8].innerText]
    ];

    let count=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(matrix[i][j]=='X'||matrix[i][j]=='O'){
                count++;
            }
        }
    }
    
    if(count==9){
        alert("All places filled. GaveOver");
        return false
    }
    else{
        return true;
    }
}

resetbtn.onclick = function() {

    boxes.forEach(box => {
        box.innerText = '_';
        box.disabled = false;
    });
    
    x = true;
}



