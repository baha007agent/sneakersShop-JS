const cartWrapper = document.querySelector(".cart-wrapper")

window.addEventListener("click", function (event) {

  if (event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.card')

    const productInfo = {
      imgSrs: card.querySelector(".product-img").getAttribute("src"),
      tittle: card.querySelector(".card-tittle").innerText,
      description: card.querySelector(".card-desc").innerText,
      price: card.querySelector(".price").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    }

    const cartItemHtml = `
    <div class="cart-item">
          <div class="info">
            <img src="${productInfo.imgSrs}" alt="Air Swift Runner" />
            <div>
              <h3>${productInfo.tittle}</h3>
              <p>Размер 42</p>
            </div>
          </div>
          <div class="price">${productInfo.price} × ${productInfo.counter}</div>
          <button class="remove-btn">✖</button>
        </div>
    `
    cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml)

    card.querySelector("[data-counter]").innerText = "1"
  }
})