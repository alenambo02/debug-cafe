const addToCart = async () => {
	console.log("click")
    // const item_name = document.querySelector('#item_title')
    // const price = document.querySelector('#item_price')
  
    // if (item_name && price) {
    //   const response = await fetch(`/api/item`, {
    //     method: 'POST',
    //     body: JSON.stringify(
    //       { 
    //         item_name,
    //         price,
    //      }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/');
    //   } else {
    //     alert('Failed to add items to cart, please try again.');
    //   }
    // }
}


document.getElementsByClassName('addtocart')
		.addEventListener('click', addToCart);