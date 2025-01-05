let changeColor = document.querySelectorAll("button");

for(let i=0; i<changeColor.length; i++){
    changeColor[i].addEventListener("click",()=>{
        // console.log(changeColor[i].textContent);
        document.body.style.backgroundColor = changeColor[i].innerHTML;   
    })
}

///named function//

// function vedanth(){

// }

// debugger
// function vedanth(a,b){
//     return a+b;
// }

// vedanth(5,10)

// console.log(vedanth(5,10));


// function funone(a,b,c){
// //    console.log(` cccc   ${c(a,b)}`);
//  c(a,b)
   
// }
// function funsum(a,b){
//     return a+b;

// }

// console.log(funone(10,20,funsum));


function one(){
    console.log("one");
    two()
    console.log("three");
    
}
function two(){
    console.log("three");
    
}

function four(){
    console.log("two");
    one()
    
}

four()
one()