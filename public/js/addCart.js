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