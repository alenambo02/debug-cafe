
<<<<<<< HEAD
    const item_name = document.querySelector('#item_title')
    const price = document.querySelector('#item_price')
  
    if (item_name && price) {
      const response = await fetch(`/api/item`, {
        method: 'PUT',
        body: JSON.stringify({item_name, price,}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add items to cart, please try again.');
      }
    }
};

document
    .querySelector('.addtocart')
    .addEventListener('submit', addToCart);

const createCart = async (event) => {
    event.preventDefault();
  
    const item_name = document.querySelector('#item_title')
    const price = document.querySelector('#item_price')
    
    if (item_name && price) {
      const response = await fetch(`/api/cart`, {
        method: 'POST',
        body: JSON.stringify({item_name, price,}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
};

document
    .querySelector('.addtocart')
    .addEventListener('submit', createCart);
=======

document.addEventListener("DOMContentLoaded", function(event) { 
	var buttonEl = document.getElementsByClassName('addtocart')
	for (var i = 0 ; i < buttonEl.length; i++) {
		buttonEl[i].addEventListener('click' , addToCart ) ; 
	}
})


const addToCart = async(e) => {
	var item_id = Number(e.target.getAttribute('data-id'))
	var response = await fetch(`/api/carts/${order_id}`)
	var data = await response.json()
	const idArr = itemArray(data.items)
	idArr.push(item_id)
	const update = await fetch(`/api/carts/${order_id}`, {
		method: 'PUT',
		body: JSON.stringify({ user_id: user_id, completed:false, itemIds: idArr }),
		headers: { 'Content-Type': 'application/json' },
	});
	// var complete = await update.json()
	// location.reload()
	window.location.href = '/menu'
	alert('Item Added To Cart')
}

function itemArray(arr){
	var itemIdArr = []
	for(let i = 0; i < arr.length; i++){
		itemIdArr.push(arr[i].cartItem.item_id)
	}
	// console.log(itemIdArr)
	return itemIdArr
}

// api/carts/order_id
// {
// 	"user_id": userid,
// 	"completed": false,
// 	"itemIds": []
// }
>>>>>>> c8765d582e7e9fda7682af8279aa9571d2b59c9f
