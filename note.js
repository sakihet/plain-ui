// function
function toggleTheme() {
  if (document.firstElementChild?.classList.contains('dark')) {
      document.firstElementChild?.classList.remove('dark')
  } else {
      document.firstElementChild?.classList.add('dark')
  }
}

// addEventListener
document.querySelector('#toggleThemeButton').addEventListener("click", toggleTheme)
