const click = () => {
    console.log('click')
}

// var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
var paymentElement = elements.create('payment');
var elements = stripe.elements({
    clientSecret: 'CLIENT_SECRET',
  });


var pay = document.querySelector('#payment')

pay.append(elements)

