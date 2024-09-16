//increment & decrement
const buttonAdd = document.getElementById('add')
const quantity = document.getElementById('main_text_inrement')
const cart = document.getElementById('add-to-cart')
const cartQuantity = document.getElementById('cart-quantity')
const realAmount = document.getElementById('real-amount')
const newPrice = document.getElementById('new-price')
const mainAmount = document.getElementById('main-amount')
const totalCost= document.getElementById('total-cost')
const buttonDecrease = document.getElementById('subtract')
//cart box
const hoverCart = document.getElementsByClassName('cart')
const hoverCartBox = document.getElementsByClassName('header_cart_hoverbox')
const hamburgerMenu = document.getElementById('mobile_hamburger_menu')
const closeMenu = document.getElementById('mobile_close_menu')



hoverCart.addEventListener('click', function(){
  hoverCartBox.style.display="none"
})

hamburgerMenu.addEventListener('click', function(){
//  hamburgerMenu.classList.toggle('show', true )
    hamburgerMenu.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', function () {
  hamburgerMenu.style.display = 'block'
  closeMenu.style.display = 'none'
  
})



console.log(buttonAdd.innerHTML)
console.log(quantity.innerText)

function incrementQuantity() {
  quantity.innerText = Number(quantity.innerText) + 1
}

buttonAdd.addEventListener('click', incrementQuantity)

buttonDecrease.addEventListener('click', function () {
  quantity.innerText = Number(quantity.innerText) - 1
})

cart.addEventListener('click', function(){
    cartQuantity.innerText = quantity.innerText
     const amount = Number(newPrice.innerText)
     const qty = Number(quantity.innerText)
    const cost = calculateCost(amount, qty)
    totalCost.innerText = cost
   
})

console.log(quantity)

function calculateCost(amount, quantity){
    const itemCost = amount * quantity
    console.log(itemCost, 'item cost')
    return itemCost
}



// const box = document.getElementsByClassName('main_text_detail')
// console.log(box, 'these are all the divs')
// const p = document.createElement('p')
// p.style.backgroundColor = 'red'
// p.innerHTML = "this is the element selected"
// p.style.color = 'white'

// box[0].appendChild(p)
// const items = [6, 7, 9, 10]

// const newItems = []
// console.log(items, 'old items array')
// for(let item of items){
//     item = item * 2
//     console.log(item)
//     newItems.push(item)
// }

// console.log(newItems, 'new items array');


// // items.shift()

// console.log(items.length)


