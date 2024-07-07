function getName(){
    let nameInput = document.getElementById('name');
    let name = nameInput.value;
    return name
}

function getQuantity(){
    let quantityInput = document.getElementById('quantity');
    let quantity = quantityInput.value;
    return quantity
}

function addItem(){
    let name = getName();
    let quantity = getQuantity();
    if (name!== '' && quantity!==''){
        console.log(name, quantity)

    }
}