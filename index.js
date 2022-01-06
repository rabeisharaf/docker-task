const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.links')
const navBtnDOM = getElement('.navbtn')
const x_btn = getElement('.links-icon')
const logo = getElement('.nav-logo')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links');
  logo.classList.toggle('toggle-logo');
  navBtnDOM.classList.toggle('toggle-navbtn');
})
x_btn.addEventListener('click', () => {
  links.classList.toggle('show-links');
  logo.classList.toggle('toggle-logo');
  navBtnDOM.classList.toggle('toggle-navbtn');
})