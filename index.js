

//increment & decrement
const buttonAdd = document.getElementById('add')
const quantity = document.getElementById('main_text_increment')
const emptyCart = document.getElementById('empty-cart')
const cart = document.getElementById('add-to-cart')
const cartQuantity = document.getElementById('cart-quantity')
const realAmount = document.getElementById('real-amount')
const newPrice = document.getElementById('new-price')
const mainAmount = document.getElementById('main-amount')
const totalCost = document.getElementById('total-cost')
const buttonDecrease = document.getElementById('subtract')
//cart box
const hoverCart = document.getElementsByClassName('cart')
const hoverCartBox = document.getElementsByClassName('header_cart_hoverbox')
const hamburgerMenu = document.getElementById('mobile_hamburger_menu')
const closeMenu = document.getElementById('mobile_close_menu')
const checkoutBtn = document.getElementById('checkout-button')
const sneakersAmount = document.getElementById('sneakers-amount')
const sneakersTotal = document.getElementById('sneakers-total')
const checkOutPage = document.getElementById('checkout-body')
const mm = document.getElementById('mobile__menu')
const Paa = document.getElementById('itemNum')
//validation
const cardInput = document.getElementById('card-number');
const form = document.getElementById('checkout-form');
const message = document.getElementById('message');
//checkout page script



let state = false
hoverCart[0].addEventListener('click', function () {
 
  if( state == false || hoverCartBox[0].style.display == 'none'){
    hoverCartBox[0].style.display = 'block'
      state  = true
}else if( state == true || hoverCartBox[0].style.display == 'block'){
    hoverCartBox[0].style.display = 'none'
    
}

if (Number(cartQuantity.innerText) == 0) {
  emptyCart.style.display = 'block'
  cartQuantity.parentElement.style.display = 'none'
} else {
  emptyCart.style.display = 'none'
  cartQuantity.parentElement.style.display = 'block'
}



}
)

hamburgerMenu.addEventListener('click', function () {
  //  hamburgerMenu.classList.toggle('show', true )
  hamburgerMenu.style.display = 'none'
  closeMenu.style.display = 'block'
  mm.style.display = 'block'
})

closeMenu.addEventListener('click', function () {
  hamburgerMenu.style.display = 'block'
  closeMenu.style.display = 'none'
    mm.style.display = 'none'
})
mm.childNodes.forEach((element)=>{
element.addEventListener('click',()=>{
    hamburgerMenu.style.display = 'block'
  closeMenu.style.display = 'none'
    mm.style.display = 'none'
})
})

console.log(buttonAdd.innerHTML)
console.log(quantity.innerText)

function incrementQuantity() {
  quantity.innerText = Number(quantity.innerText) + 1
}

buttonAdd.addEventListener('click', incrementQuantity)

buttonDecrease.addEventListener('click', function () {
  let qty =  Number(quantity.innerText)

 if(qty != 0){
  let Qty =  qty - 1
  quantity.innerText = Qty
  if(Qty == 0){
    Paa.innerHTML = 'Your cart is empty'
  }
 }
})

cart.addEventListener('click', function () {
  // reload();
  cartQuantity.innerText = quantity.innerText
  const amount = Number(newPrice.innerText)
  const qty = Number(quantity.innerText)
  const cost = calculateCost(amount, qty)
  totalCost.innerText = cost
  localStorage.setItem('cost', cost)
  
})

checkoutBtn.addEventListener('click', ()=>{
  
  window.location.href='checkout.html'

})


function calculateCost(amount, quantity) {
  const itemCost = amount * quantity
  console.log(itemCost, 'item cost')
    localStorage.setItem('cost', itemCost)
  return itemCost
}



  

// function reload(){
//   location.reload();
// }
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



const student = {
  name: 'John',
  lastName: 'Doe',
  isActive: true,
  gender: 'male',
  class: 'SS1',
  height: 150,
  weight: 50,
  getAge: function (dob) {
    return 2024 - dob
  },
  fullName: function () {
    return this.name + ' ' + this.lastName
  },
}

console.log(student.name)
console.log(student.fullName())
console.log(student.getAge(1990))

const students = [
  {
    name: 'John',
    lastName: 'Doe',
    isActive: true,
    gender: 'male',
    class: 'SS1',
    height: 150,
    weight: 50,
    getAge: function (dob) {
      return 2024 - dob
    },
    fullName: function () {
      return this.name + ' ' + this.lastName
    },
  },

  {
    name: 'Timothy',
    lastName: 'opaul',
    isActive: true,
    gender: 'male',
    class: 'SS1',
    height: 151,
    weight: 54,
    getAge: function (dob) {
      return 2024 - dob
    },
    fullName: function () {
      return this.name + ' ' + this.lastName
    },
  },

  {
    name: 'kate',
    lastName: 'Ben',
    isActive: true,
    gender: 'female',
    class: 'SS1',
    height: 120,
    weight: 40,
    getAge: function (dob) {
      return 2024 - dob
    },
    fullName: function () {
      return this.name + ' ' + this.lastName
    },
  },
]

console.log(students[1].class)

function getOrderDetails(){
  cost = localStorage.getItem('cost')
  sneakersTotal.innerText = `$${cost}`
}



//validation


    // Automatically format input as "xxxx xxxx xxxx xxxx"
    cardInput.addEventListener('input', function (e) {
      let input = cardInput.value.replace(/\D/g, ''); // Remove all non-digit characters
      if (input.length > 16) {
        input = input.substring(0, 16); // Restrict to 16 digits
      }

      // Insert space after every 4th digit, resulting in "xxxx xxxx xxxx xxxx"
      cardInput.value = input.replace(/(\d{4})(\d{4})(\d{4})(\d{4})?/, function(_, g1, g2, g3, g4) {
        return g1 + '-' + g2 + '-' + g3 + (g4 ? '-' + g4 : '-');
      });
    });

    // // Validate form submission
    // form.addEventListener('submit', function(e) {
    //   e.preventDefault();

    //   const digitsOnly = cardInput.value.replace(/\D/g, ''); // Get digits only
    //   if (digitsOnly.length === 16) {
    //     message.textContent = "Success! Card number is valid.";
    //     message.style.color = "green";
    //   } else {
    //     message.textContent = "Error! Please enter exactly 16 digits.";
    //     message.style.color = "red";
    //   }
    // });
// checkOutPage.addEventListener('load',getOrderDetails)