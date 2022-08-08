
const viewTea = document.querySelector('#viewteabtn')

function viewTeaDetails(){
       location.replace( '/ordermenu/tea')     
}


viewTea.addEventListener("click", viewTeaDetails)


// ===================================================================
const viewFood = document.querySelector('#viewfoodbtn')

function viewFoodDetails(){
       location.replace( '/ordermenu/food')     
}



viewTea.addEventListener("click", viewFoodDetails)


// ===================================================================
const viewCoffee = document.querySelector('#viewcoffeebtn')

function viewCoffeeDetails(){
    location.replace( '/ordermenu/coffee')     
}

viewTea.addEventListener("click", viewCoffeeDetails)


// ===================================================================

const viewCold = document.querySelector('#viewcoldbtn')

function viewColdDetails(){
    location.replace( '/ordermenu/cold')     
}

viewTea.addEventListener("click", viewColdDetails)