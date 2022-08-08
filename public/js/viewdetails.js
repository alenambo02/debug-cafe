
const viewTea = document.querySelector('#viewteabtn')

function viewTeaDetails(){
    console.log('click')   
    location.replace( '/menu/tea')     
}


viewTea.addEventListener("click", viewTeaDetails)


// ===================================================================
const viewFood = document.querySelector('#viewfoodbtn')

function viewFoodDetails(){
    console.log('click')   
    location.replace( '/menu/food')     
}



viewTea.addEventListener("click", viewFoodDetails)


// ===================================================================
const viewCoffee = document.querySelector('#viewcoffeebtn')

function viewCoffeeDetails(){
    console.log('click')
    location.replace( '/menu/coffee')     
}

viewTea.addEventListener("click", viewCoffeeDetails)


// ===================================================================

const viewCold = document.querySelector('#viewcoldbtn')

function viewColdDetails(){
    console.log('click')
    location.replace( '/menu/cold')     
}

viewTea.addEventListener("click", viewColdDetails)