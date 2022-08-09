

document.addEventListener("DOMContentLoaded", function(event) { 
	var buttonEl = document.getElementsByClassName('addtocart')
	for (var i = 0 ; i < buttonEl.length; i++) {
		buttonEl[i].addEventListener('click' , addToCart ) ; 
	}
})


const addToCart = async(e) => {
	console.log('user id: ',user_id)
	console.log("order id: ",order_id)
	console.log('click')
	var item_id = e.target.getAttribute('data-id')
	console.log('item id: ',item_id)
	var response = await fetch(`/api/carts/${order_id}`)
	var data = await response.json()
	// const response = await fetch(`/api/carts/${order_id}`, {
		// 	method: 'Get',
		// 	body: JSON.stringify({ user_id: user_id, item_id }),
		// 	headers: { 'Content-Type': 'application/json' },
		// });}
	console.log(data)
	itemArray(data.items)
	console.log(itemArr)
	if(item_id){
	}
}

function itemArray(arr){
	for(let i = 0; i < arr.length; i++){
		
	}
}

// api/carts/order_id
// {
// 	"user_id": userid,
// 	"completed": false,
// 	"itemIds": []
// }