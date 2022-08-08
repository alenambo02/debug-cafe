const public = document.querySelector('#public').textContent
const private = document.querySelector('#private').textContent
// const stripe = require('stripe')(public);

// stripe.customers.create({
//     email: 'customer@example.com',
//   })
//     .then(customer => console.log(customer.id))
//     .catch(error => console.error(error));
const cart = document.getElementById('cart').textContent
const order = cart.split('#')
const id = order[order.length-1]
// console.log(id)

var stripeHandler = StripeCheckout.configure({
    key: public,
    locale: "auto",
    token: function(token){
        console.log(token)
        if(token){
            console.log('hi')
            redirect()
        }
    }
})

var redirect = () =>{
    location.replace(`/confirm/${id}`)
}

function purchaseClicked(){
    var totalEl = document.getElementById('cart-total')
    var total = parseFloat((totalEl.textContent).replace('$', '')) * 100
    stripeHandler.open({
        amount: total
    })
}

var checkout = document.querySelector('#checkout-button')

checkout.addEventListener("click", purchaseClicked)