

var stripeHandler = StripeCheckout.configure({
    key: stripePublic,
    local: "auto",
    token: function(token){
        console.log('token')
    }
})

function purchaseClicked(){
    console.log("purchase clicked")
    // var total = document.querySelector('#cart-total')
    var totalEl = document.getElementById('cart-total')
    var total = parseFloat((totalEl.textContent).replace('$', '')) * 100
    console.log(total)
    // console.log(num)
    stripeHandler.open({
        amount: total
    })
}

var checkout = document.querySelector('#checkout-button')

checkout.addEventListener("click", purchaseClicked)