
let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`

function generate(){
    let input1 = document.querySelector("#input1")
    let input2 = document.querySelector("#input2")
    let table = document.querySelector("#table")
    let error = document.querySelector("#error");

    if(input1 === ""){
        error.innerText = "input1 is required"
    }
    
    for (let i = 1; i<=input2.value; i++) {
        table.innerText += `${input1.value} x ${i} = ${input1.value*i} \n`;}

        input1.value = "";
        input2.value = "";
}
