const inventory = [];

function addItem() {
    const name = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('itemQuantity').value);
    const item = { name, quantity };
    inventory.push(item);
    displayInventory();
}

function updateItem() {
    const name = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('itemQuantity').value);
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name) {
            inventory[i].quantity = quantity;
            break;
        }
    }
    displayInventory();
}

function removeItem() {
    const name = document.getElementById('itemName').value;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name) {
            inventory.splice(i, 1);
            break;
        }
    }
    displayInventory();
}

function displayInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';
    inventory.forEach(item => {
        inventoryList.innerHTML += `<p>${item.name}: ${item.quantity}</p>`;
    });
}

// Initialize the display
displayInventory();
