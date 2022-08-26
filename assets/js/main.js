function getDifference(){
    // define variables
    let a=document.getElementById("age1").value;
    let b=document.getElementById("age2").value;
    let differenceTallA=a-b;
    let differenceTallB=b-a;
    // if statement to show difference 
    if(a>b){
        document.getElementById("calculation").innerHTML=differenceTallA;
    }else if (b>a){
        document.getElementById("calculation").innerHTML=differenceTallB;
    }
}
