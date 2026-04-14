function addSpec(){
  let container = document.getElementById("specs-container")

  let div = document.createElement("div")
  div.classList.add("spec-row")

  div.innerHTML = `
    <input type="text" placeholder="Spec Name">
    <input type="text" placeholder="Value">
  `

  container.appendChild(div)
}
