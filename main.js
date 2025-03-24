import './style.css'

function openDialog() {
  document.querySelector('#dl').showModal()
}

function closeDialog() {
  document.querySelector('#dl').close()
}

document.querySelector('#dialogOpenButton').addEventListener("click", openDialog)
document.querySelector('#dialogCloseButton').addEventListener("click", closeDialog)
