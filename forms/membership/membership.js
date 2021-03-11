
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnSubmit.onclick=function(){
  let name = inptName.value
  if(members.includes(name) == true) { 
  lblMessage.value = `Hello ${name} your name is on the list.`
} else {
  lblMessage.value = `Hello ${name}, your name is not on the list.`
  members.push(name)
  }
  }