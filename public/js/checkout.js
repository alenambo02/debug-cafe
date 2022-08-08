// const public = document.querySelector('#public').textContent
// const private = document.querySelector('#private').textContent
// const stripe = require('stripe')(public);

// const { request } = require("express")
// const stripe = require('stripe')(stripeSecret);
// stripe.customers.create({
//     email: 'customer@example.com',
//   })
//     .then(customer => console.log(customer.id))
//     .catch(error => console.error(error));
const cart = document.getElementById('cart').textContent
const order = cart.split('#')
const id = order[order.length-1]
// console.log(id)
var redirect = () =>{
    location.replace(`/confirm/${id}`)
}
var totalEl = document.getElementById('cart-total')
var total = parseFloat((totalEl.textContent).replace('$', '')) * 100

function purchaseClicked(){
    stripeHandler.open({
        amount: total
    })
}

var checkout = document.querySelector('#checkout-button')

checkout.addEventListener("click", purchaseClicked)

var stripeHandler = StripeCheckout.configure({
    key: stripePublic,
    locale: "auto",
    token: function(token){
        console.log(token)
        if(token){
            console.log('hi')
            // redirect()
            stripe.charges.create({
                amount: total,
                source: token.id,
                currency: 'usd'
            }).then(function(){
                console.log('Charge Successful')
                res.json({message:'Charge Successful'})
            }).catch(function(){
                console.log('Charge Fail')
                res.status(500).end()
            })
        }
    }
})
