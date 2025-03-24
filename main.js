import './style.css'

// function
function toggleTheme() {
  if (document.firstElementChild?.classList.contains('dark')) {
    document.firstElementChild?.classList.remove('dark')
  } else {
    document.firstElementChild?.classList.add('dark')
  }
}
function openDialog() {
  document.querySelector('#dl').showModal()
}
function closeDialog() {
  document.querySelector('#dl').close()
}

// addEventListener
document.querySelector('#toggleThemeButton').addEventListener("click", toggleTheme)
document.querySelector('#dialogOpenButton').addEventListener("click", openDialog)
document.querySelector('#dialogCloseButton').addEventListener("click", closeDialog)
