const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

/* Declaring the array of image filenames */
const images = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg',
]

/* Declaring the alternative text for each image file */
const alts = {
  'images/pic1.jpg': 'Human eye zoomed in',
  'images/pic2.jpg': 'Rock formation',
  'images/pic3.jpg': 'Purple and white flowers',
  'images/pic4.jpg': 'Egyptian wall art',
  'images/pic5.jpg': 'Butterfly on a leaf',
}

/* Looping through images */
for (const image of images) {
  const newImage = document.createElement('img')
  newImage.setAttribute('src', image)
  newImage.setAttribute('alt', alts[image])
  thumbBar.appendChild(newImage)
  newImage.addEventListener('click', function () {
    displayedImage.setAttribute('src', image)
    displayedImage.setAttribute('alt', alts[image])
  })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
  const currButtonClass = btn.getAttribute('class')
  if (currButtonClass === 'dark') {
    btn.setAttribute('class', 'light')
    btn.textContent = 'Lighten'
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
  } else {
    btn.setAttribute('class', 'dark')
    btn.textContent = 'Darken'
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  }
})
