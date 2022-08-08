var getSum = (items) => {
	var sum = 0
	// console.log(items)
	if(items === undefined){
		return sum
	}
	for(let i = 0; i < items.length; i++){
		sum += Number(items[i].price)
	}
	return sum
}

var getTax = (items) => {
	const sum = getSum(items)
	var taxRate = .09
	var tax = (sum*taxRate)
	return Number(tax.toFixed(2))
}
	
var getTotal = (items) => {
	const sum = getSum(items)
	const tax = getTax(items)
	return sum+tax
}

module.exports = {
    openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    },
      
	closeNav() {
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("main").style.marginLeft= "0";
	},
    getSum,
	getTax, 
	getTotal
};