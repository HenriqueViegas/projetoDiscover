function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")

  //pegar a tag img e substituir a imagem antiga pela nova quando tiver sem light mode
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.style.border = "2px solid #6b6868"
    img.setAttribute("alt", "foto do usuário no light mode")
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
    img.style.border = "2px solid #fff"
    img.setAttribute("alt", "foto do usuário no dark mode")
  }
}
