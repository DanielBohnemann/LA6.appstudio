

addBtn.onclick=function(){
  let num1 = parseInt(fnInput.value)
  let num2 = parseInt(snInput.value)
  let sum = num1 + num2
  lblMessage2.value = sum
}


resetBtn.onclick=function(){
  lblMessage2.value = ""
}

