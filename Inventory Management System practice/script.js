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
    console.log(name,typeof(quantity))
    if (name!== '' && quantity!==''){
        let newItem = document.createElement('li')
        newItem.classList.add('item')
        newItem.textContent = `${name}: ${quantity}`
        let itemList = document.getElementById('itemList')
        itemList.append(newItem)
        document.getElementById('name').value = ''
        document.getElementById('quantity').value = ''
    }
}

function removeItem(){
    let name = getName()
    if(name !== ''){
        let items = document.getElementsByClassName('item')
        itemsArray = Array.from(items)
        for(let item of itemsArray){
            if(item.textContent.startsWith(name)){
                item.remove()
            }
        }
        document.getElementById('name').value = ''
        document.getElementById('quantity').value = ''
    }
}

function updateQuantity(){
    let name = getName();
    let quantity = getQuantity();
    if(name !== '' && quantity !== ''){
        let items = document.getElementsByClassName('item')
        itemsArray = Array.from(items)
        for(let item of itemsArray){
            if(item.textContent.startsWith(name)){
                item.textContent = `${name}: ${quantity}`
            }
        }
        document.getElementById('name').value = ''
        document.getElementById('quantity').value = ''
    }
}