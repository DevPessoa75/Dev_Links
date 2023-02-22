function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

// pegar uma tag
const img = document.querySelector("#profile img")

// Substituir a imagem 
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    // se tiver sem light mode, menter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

}
