
const viewTea = document.querySelector('.viewteabtn')

function viewTeaDetails(){
       location.replace( '/menu/tea')  
}

viewTea.addEventListener("click", viewTeaDetails)

// ===================================================================

const viewCold = document.querySelector('.viewcoldbtn')

function viewColdDetails(){
    location.replace( '/menu/cold')     
}

viewTea.addEventListener("click", viewColdDetails)

// ===================================================================
const viewCoffee = document.querySelector('.viewcoffeebtn')

function viewCoffeeDetails(){
    location.replace( '/menu/coffee')     
}

viewTea.addEventListener("click", viewCoffeeDetails)


// ===================================================================



const viewFood = document.querySelector('.viewfoodbtn')

function viewFoodDetails(){
       location.replace( '/menu/food')     
}



viewTea.addEventListener("click", viewFoodDetails)
