var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var object = new Object();
 var price = Math.floor(Math.random() * 100) + 1
 object[item] = price
 cart.push(object)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length == 0){
      console.log("Your shopping cart is empty.")
  }
  else{
      var msg = "In your cart, you have"
      for (var i=0; i<cart.length ; i++)
      {
          msg += ` ${Object.keys(cart[i])[0]} at ${Object.values(cart[i])[0]}`
          if (i<cart.length-3){
            msg += ","
        }
        else if (i == cart.length-2 ){
            msg += " and"
        }
      }
      msg += "."
  }
  console.log(msg)

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
