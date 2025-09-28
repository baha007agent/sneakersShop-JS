const btnPlus = document.querySelector('[data-action="plus"]')
const btnMinus = document.querySelector('[data-action="minus"]')
const counter = document.querySelector('[data-counter]')

console.log(counter);

btnPlus.addEventListener("click", () => {
  counter.innerText = ++counter.innerText
})

btnMinus.addEventListener("click", () => {
  if (parseInt(counter.innerText) === 1) {
    counter.innerText = 1
  } else {
    counter.innerText = --counter.innerText
  }
})