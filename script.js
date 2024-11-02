


const buttonsEl = document.querySelectorAll(".char")
const displayDiv = document.querySelector(".displayDiv")
const equalButton = document.getElementById("equalbutton")
const resetButton = document.getElementById("resetbutton")
const deleteButton = document.getElementById("deletebutton")

console.log(buttonsEl)

buttonsEl.forEach(displayFunction)

function displayFunction(button){
  button.addEventListener("click", function(){
    displayDiv.textContent += button.textContent
  })
}


equalButton.addEventListener("click", function(){
 displayDiv.textContent += " = " + eval(displayDiv.textContent)
}
)

resetButton.addEventListener("click", function(){
  displayDiv.textContent = ""
})

deleteButton.addEventListener("click", function(){
  displayDiv.textContent = displayDiv.textContent.slice(0,-1)
})

function toggleTheme(sheet){
  let style = document.getElementById("style")
  style.setAttribute('href', sheet)
}



