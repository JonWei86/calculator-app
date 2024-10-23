const numBtns = document.querySelectorAll('.number-btn')
const opBtns = document.querySelectorAll('.operator-btn')
const equalsBtn = document.querySelector('#equals-btn')
const screen = document.querySelector('.screen')

let current = ""
let operator = ""
let firstNum = ""

for (let btn of numBtns){
    btn.addEventListener('click', ()=>{
        current += btn.textContent
        if (current === "") screen.innerHTML = current
        if (current) screen.innerHTML = firstNum + operator + current
    })
}

for (let btn of opBtns){
    btn.addEventListener('click', ()=>{
       if (operator === ""){
        operator += btn.textContent
        screen.innerHTML = current + operator
        firstNum = current
        current = ""
        }
       else{ return console.log("you already have an operator selected");}
    })
}


equalsBtn.addEventListener('click',()=>{
    let solution = 0

    if (operator === '+')solution = Number(firstNum) + Number(current)
    if (operator === '-')solution = Number(firstNum) - Number(current)
    if (operator === 'x')solution = Number(firstNum) * Number(current)
    if (operator === '/')solution = Number(firstNum) / Number(current)
    
        
        screen.innerHTML =`${firstNum}${operator}${current} = ${solution}`
        current = solution
        operator = ""
})