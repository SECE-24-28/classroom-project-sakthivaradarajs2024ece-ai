function myfunction(){
    let name=document.getElementById('name').value;
    let nam=document.getElementById('nam').value;
    let x=parseInt(name)+parseInt(nam);
    console.log(x);

}
function myfun(){
     let one=document.getElementById('name').value;
    let two=document.getElementById('nam').value;
    if(one==two)
        console.log("equals");
    else
        console.log("not equal");
}
function notequal(){
    let one=document.getElementById('one').value;
    let two=document.getElementById('two').value;
    if(one!=two)
        console.log("true");
    else
        console.log("false");
}
function and(){
    let one=parseInt(document.getElementById('one').value);
    let two=parseInt(document.getElementById('two').value);
    if(one>=two && one>two){
        console.log("true");
    }
    else{
        console.log("false");
    }

}

function marks(){
    let one=parseInt(document.getElementById('on').value);
    let two=parseInt(document.getElementById('tw').value);
    let three=parseInt(document.getElementById('three').value);
    if(one>=40 && two>=40 && three>=40){
        console.log("pass");
    }
    else{
        console.log("fails")
    }
}
function calculate() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("op").value;

    let res = 0;

    if (op === "+") res = a + b;
    if (op === "-") res = a - b;
    if (op === "*") res = a * b;
    if (op === "/") res = a / b;

    document.getElementById("result").innerText = res;
}
