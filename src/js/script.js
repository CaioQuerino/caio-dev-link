function toggleMode () {
  const html = document.documentElement
  const profileImage = document.querySelector('#profile img')

  html.classList.toggle('light')

  if (profileImage) {
    profileImage.setAttribute('src', html.classList.contains('light') ? './src/assets/profile-light.png' : './src/assets/profile-dark.jpeg')
  } else {
    console.error("Profile image not found. Check the selector and HTML structure.");
  }
}